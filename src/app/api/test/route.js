import {NextResponse} from "next/server"
import { readFile } from '../../backend/scripts/fileManagement.js';

export async function GET() {
    return NextResponse.json({test: "test"})
}