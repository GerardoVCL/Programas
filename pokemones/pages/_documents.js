import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

//Server Side rendering de styled components

export default class MyDocument extends Document {
    static async getInitialProps(ctx){
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.render.Page

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => props =>
                    sheet.collectStyles(<App {...props}/>),
            })
            const initialProps = await Document.getInitialProps(ctx)
            return{
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }
}