import Head from 'next/head';
import content from '../json/data.json';
import Link from 'next/link';
import Image from 'next/image';

export default function Project({page}) {
    return (
        <div>
          <h1 className="text-xl text-indigo-600 mb-4 font-bold">
            {page.title}
          </h1>
            <Image src={page.image} alt='' width={500} height={300}/>
          <div className='mt-4' dangerouslySetInnerHTML={{__html: page.content}}></div>
          <div className='mt-6'>
            <Link href="/">
              <a className="font-bold underline hover:text-indigo-600">Back</a>
            </Link>
          </div>
        </div>
      );
    
}

export async function getStaticPaths() {
    const paths = content.projects.map(page => {
        const slug = page.path.split('/').slice(1);
        return {params: {slug}};
    });
    return {paths, fallback: true};
}

export async function getStaticProps({params}) {
    const currentPath = `/${params.slug.join('/')}`;
    const page = content.projects.find(page => page.path === currentPath) || {notFound: true};
    return {props: {page}};
}