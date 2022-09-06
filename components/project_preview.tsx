import Image from "next/image";
import Link from "next/link";

export interface ProjectPreviewInterface {
    title: string;
    description: string;
    path: string;
    image: string;
    content: string;
}

const ProjectPreview = (props: ProjectPreviewInterface) => {
    return (
        <div className="flex gap-4 bg-slate-200">
            <div className="relative w-24 h-16">
                <Image src={props.image} layout="fill" alt=""></Image>
            </div>
            <div className="my-auto">
                <Link href={props.path}>
                    <a className="font-bold underline hover:text-indigo-600">
                        {props.title}
                    </a>
                </Link>
                <div>{props.description}</div>
            </div>
        </div> 
    );
};

export default ProjectPreview;