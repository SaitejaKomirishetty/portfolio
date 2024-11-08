import React from 'react';

const Background = () => {
    return (
        <div>
            <div className='flex justify-end w-full'>
                <div className='text-end w-64 font-mono'>
                    The Id Card is Interactive feel free to play with it.
                </div>
            </div>
            <svg
                width='500'
                height='600'
                viewBox='0 0 500 600'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g clipPath='url(#clip0_32_2)'>
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M384.857 216.986L376.216 219.503C375.686 219.658 375.131 219.353 374.977 218.823L372.46 210.182C372.305 209.652 372.61 209.097 373.14 208.942C373.67 208.788 374.225 209.092 374.38 209.623L376.222 215.946L493.06 3.06198L494.813 4.02425L377.975 216.908L384.298 215.066C384.828 214.912 385.383 215.216 385.538 215.746C385.692 216.277 385.388 216.832 384.857 216.986Z'
                        className='fill-color'
                    />
                </g>
                <defs>
                    <clipPath id='clip0_32_2'>
                        <rect width='500' height='600' fill='white' />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default Background;
