import Headline from './headline'
import ListContent from './listcontent-bbc';
import ListEngadget from './listcontent-engadget'
import ListTech from './listcontent-techcrunch'
export default function HomePage() {
    return (
        <>
            <Headline />
            <ListTech />
            <ListEngadget />
            <ListContent />
        </>
    )
}