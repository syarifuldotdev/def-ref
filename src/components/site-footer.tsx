
import { siteConfig } from "@/config/site"
import Link from "next/link"

export function SiteFooter() {
    return (
        <footer className="py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    <div>Missing Useful Website? <Link className="font-medium underline underline-offset-4" href={siteConfig.links.github}>Contribute Here</Link>.</div>
                    <div>
                        Built by{" "}
                        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">syarifuldotdev</Link>. The source code is available on{" "}
                        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</Link>.
                    </div>
                </p>
            </div>
        </footer>
    )
}