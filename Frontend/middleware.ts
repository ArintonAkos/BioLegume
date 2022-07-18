// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale == null

  if (shouldHandleLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/hu${request.nextUrl.pathname}`

    return NextResponse.redirect(url)
  }

  return undefined
}