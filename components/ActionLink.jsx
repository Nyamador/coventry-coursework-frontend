import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const ActionLink = ({name, href, image}) => {
    return (
        <Link href={href}>
            <a className="flex flex-col text-center items-center p-10">
                <div className="flex flex-row justify-center rounded-full p-4 hover:bg-blue-500 bg-blue-600 h-24 w-24 mb-4">
                        <Image src={image} width='30px' height='30px'/>
                </div>
                    {name}
            </a>
        </Link>
    );
}

export default ActionLink;
