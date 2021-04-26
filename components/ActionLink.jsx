import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const ActionLink = ({name, href, image}) => {
    return (
        <Link href={href}>
            <a className="flex flex-col text-center items-center p-4 text-xs mb-6 hover:bg-gray-100 h-full">
                <div className="flex flex-row justify-center">
                        <Image src={image} width='30px' height='30px'/>
                </div>
                    <span className="mt-2">{name}</span>
            </a>
        </Link>
    );
}

export default ActionLink;
