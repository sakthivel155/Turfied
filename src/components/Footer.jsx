import React from 'react';
import Footercard from './ui/Footercard.jsx';
import { footCards } from '../data/linkList.js'
const Footer = () => {
    return (
    <footer className="m-8 laptop:max-w-[90%] laptop:mx-auto">
        <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-5 '>
        <div className="mb-5 flex flex-col gap-2 text-sm">
        <svg
        className="bg-slate-700 w-[130px] h-max rounded-lg p-2"
        width="262"
        height="89"
        viewBox="0 0 262 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M38.6292 27.1734V36.5071H25.9572V75H14.3071V36.5071H1.6351V27.1734H38.6292ZM82.0151 36.984V75H70.365V69.8222C69.1841 71.5027 67.5718 72.8653 65.5279 73.9099C63.5294 74.9092 61.3039 75.4088 58.8512 75.4088C55.9444 75.4088 53.3782 74.7729 51.1527 73.5012C48.9271 72.184 47.2012 70.2991 45.9749 67.8465C44.7485 65.3938 44.1354 62.5097 44.1354 59.1941V36.984H55.7173V57.6271C55.7173 60.1706 56.3759 62.1463 57.693 63.5543C59.0102 64.9623 60.7816 65.6663 63.0071 65.6663C65.2781 65.6663 67.0721 64.9623 68.3893 63.5543C69.7065 62.1463 70.365 60.1706 70.365 57.6271V36.984H82.0151ZM102.033 43.32C103.396 41.2307 105.099 39.5956 107.143 38.4147C109.187 37.1884 111.458 36.5752 113.956 36.5752V48.9066H110.754C107.847 48.9066 105.667 49.5425 104.213 50.8142C102.76 52.0405 102.033 54.2206 102.033 57.3546V75H90.3833V36.984H102.033V43.32ZM138.601 46.6583H132.333V75H120.683V46.6583H116.459V36.984H120.683V35.8939C120.683 31.2157 122.022 27.673 124.702 25.2658C127.382 22.8132 131.311 21.5868 136.489 21.5868C137.351 21.5868 137.987 21.6095 138.396 21.655V31.5337C136.171 31.3974 134.604 31.7154 133.695 32.4875C132.787 33.2596 132.333 34.6449 132.333 36.6434V36.984H138.601V46.6583ZM194.348 55.3788C194.348 56.4689 194.28 57.6044 194.144 58.7853H167.778C167.96 61.1471 168.709 62.9639 170.026 64.2356C171.389 65.4619 173.046 66.0751 175 66.0751C177.906 66.0751 179.928 64.8488 181.063 62.3961H193.462C192.827 64.8942 191.668 67.1425 189.988 69.1409C188.353 71.1394 186.286 72.7063 183.788 73.8418C181.29 74.9773 178.497 75.545 175.408 75.545C171.684 75.545 168.368 74.7502 165.461 73.1605C162.555 71.5708 160.284 69.2999 158.649 66.3476C157.013 63.3954 156.196 59.9435 156.196 55.992C156.196 52.0405 156.991 48.5886 158.58 45.6364C160.216 42.6841 162.486 40.4132 165.393 38.8235C168.3 37.2338 171.638 36.439 175.408 36.439C179.087 36.439 182.357 37.2111 185.219 38.7554C188.08 40.2996 190.306 42.5025 191.896 45.3639C193.531 48.2253 194.348 51.5636 194.348 55.3788ZM182.426 52.313C182.426 50.3146 181.744 48.7249 180.382 47.544C179.019 46.3631 177.316 45.7726 175.272 45.7726C173.319 45.7726 171.661 46.3404 170.299 47.4759C168.981 48.6114 168.164 50.2237 167.846 52.313H182.426ZM198.178 55.9239C198.178 52.0178 198.904 48.5886 200.358 45.6364C201.857 42.6841 203.878 40.4132 206.421 38.8235C208.965 37.2338 211.804 36.439 214.938 36.439C217.436 36.439 219.707 36.9613 221.75 38.0059C223.84 39.0506 225.475 40.4586 226.656 42.2299V24.5845H238.306V75H226.656V69.5497C225.566 71.3665 223.999 72.8199 221.955 73.9099C219.956 75 217.617 75.545 214.938 75.545C211.804 75.545 208.965 74.7502 206.421 73.1605C203.878 71.5254 201.857 69.2317 200.358 66.2795C198.904 63.2818 198.178 59.8299 198.178 55.9239ZM226.656 55.992C226.656 53.0852 225.838 50.7915 224.203 49.111C222.613 47.4305 220.66 46.5902 218.344 46.5902C216.028 46.5902 214.052 47.4305 212.417 49.111C210.827 50.7461 210.032 53.017 210.032 55.9239C210.032 58.8307 210.827 61.1471 212.417 62.873C214.052 64.5535 216.028 65.3938 218.344 65.3938C220.66 65.3938 222.613 64.5535 224.203 62.873C225.838 61.1925 226.656 58.8988 226.656 55.992Z"
            fill="#F1F3F2"
            />
        <g filter="url(#filter0_d_1_2)">
            <path
            d="M153.113 41.1613V35.6613H142.113V41.1613H153.113ZM142.113 75.2258C142.113 78.2634 144.575 80.7258 147.613 80.7258C150.65 80.7258 153.113 78.2634 153.113 75.2258H142.113ZM142.113 41.1613V75.2258H153.113V41.1613H142.113Z"
            fill="#F1F3F2"
            />
          </g>
          <circle cx="156.839" cy="40.4516" r="4.96774" fill="#F1F3F2" />
          <path
            d="M153.29 41.1613L154.71 39.7419"
            stroke="#F1F3F2"
            strokeWidth="0.709677"
            strokeLinecap="round"
            />
          <path
            d="M158.968 41.1613L160.387 39.7419"
            stroke="#F1F3F2"
            strokeWidth="0.709677"
            strokeLinecap="round"
            />
          <path
            d="M154.71 42.5806L158.968 38.3226"
            stroke="#F1F3F2"
            strokeWidth="0.709677"
            strokeLinecap="round"
            />
          <path
            d="M149.387 22.7097C149.387 21.7298 148.593 20.9355 147.613 20.9355C146.633 20.9355 145.839 21.7298 145.839 22.7097H149.387ZM145.839 22.7097V38.3226H149.387V22.7097H145.839Z"
            fill="#F1F3F2"
            />
        </svg>
        <p>© 2024 Tech Solution Pvt. Ltd.</p>
        <p>All Rights Reserved.</p>
        </div>
            {footCards.map((card,key=0) => <Footercard key={key+1} linkHeader = {card.linkHeader} linkNames={card.links} />)}
        </div>
    </footer>
);
};

export default Footer;