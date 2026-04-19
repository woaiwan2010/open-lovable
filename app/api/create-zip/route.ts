import { NextResponse } from 'next/server';
import JSZip from 'jszip';

declare global {
  var activeSandbox: any;
  var activeSandboxProvider: any;
}

// Get the sandbox provider (V2) or raw sandbox
function getSandboxProvider(): any {
  if (global.sandboxState?.sandbox) return global.sandboxState.sandbox;
  if (global.activeSandboxProvider) return global.activeSandboxProvider;
  return null;
}

export async function POST() {
  try {
    const provider = getSandboxProvider();
    
    if (!provider) {
      return NextResponse.json({ 
        success: false, 
        error: 'No active sandbox' 
      }, { status: 400 });
    }
    
    console.log('[create-zip] Collecting all files from sandbox via provider API...');
    
    // Step 1: List all files using provider API
    let fileList: string[] = [];
    try {
      fileList = await provider.listFiles();
      console.log(`[create-zip] listFiles returned ${fileList.length} files`);
    } catch (e) {
      console.error('[create-zip] listFiles failed:', e);
    }
    
    // Step 2: Read each file via provider API
    const allFiles: Record<string, string> = {};
    
    for (const filePath of fileList) {
      if (!filePath) continue;
      if (/\.(png|jpg|jpeg|gif|ico|woff|woff2|ttf|eot|mp4|webm|webp|lock)$/i.test(filePath)) continue;
      
      try {
        const content = await provider.readFile(filePath);
        if (content != null) {
          allFiles[filePath] = content;
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }
    
    // Step 3: Override with cached files (more up-to-date)
    const cachedFiles = global.sandboxState?.fileCache?.files || {};
    for (const [path, data] of Object.entries(cachedFiles)) {
      const fileData = data as any;
      if (!fileData?.content) continue;
      const normalizedPath = path.replace(/^\/vercel\/sandbox\//, '').replace(/^\//, '');
      allFiles[normalizedPath] = fileData.content;
    }
    
    const totalFiles = Object.keys(allFiles).length;
    console.log(`[create-zip] Total files to zip: ${totalFiles}`);
    
    if (totalFiles === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'No files found' 
      }, { status: 400 });
    }
    
    // Step 4: Build ZIP
    const zip = new JSZip();
    for (const [filePath, content] of Object.entries(allFiles)) {
      zip.file(filePath, content);
    }
    
    const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
    console.log(`[create-zip] ZIP created: ${zipBuffer.length} bytes, ${totalFiles} files`);
    
    return new Response(zipBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="project.zip"',
        'Content-Length': zipBuffer.length.toString(),
      },
    });
    
  } catch (error) {
    console.error('[create-zip] Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: (error as Error).message 
      }, 
      { status: 500 }
    );
  }
}