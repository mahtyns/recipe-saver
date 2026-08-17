import { siteContent } from '@/app/lib/content/en/site-content'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        {siteContent.footer.logo}
                    </div>
                    <div className="footer__links">
                        <div className="footer__links__title">{siteContent.footer.links.title}</div>
                        <div className="footer__links__column">
                            {
                                siteContent.footer.links.blocks.map(block =>
                                    <div key={block.title}>
                                        <div className="footer__links__block-title">{block.title}</div>
                                        <ul className="footer__links__block">
                                            {block.links.map(link => <li key={link.linkName}><a href={link.linkUrl}>{link.linkName}</a></li>)}
                                        </ul>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                {siteContent.footer.copyright}
            </div>
        </footer>
    )
}
