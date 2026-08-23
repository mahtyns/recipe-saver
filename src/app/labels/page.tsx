import LabelList from "../components/labels/label-list/LabelList";
import { MainContainer } from "../layouts/components/MainContainer";
import { LABELS_CLASS } from "../lib/content/classes.constants";


export default function Labels() {
    return (
        <div>
            <main>
                <MainContainer mainClass={LABELS_CLASS} content={<LabelList mainClass={LABELS_CLASS} />} />
            </main>
        </div>
    );
}
