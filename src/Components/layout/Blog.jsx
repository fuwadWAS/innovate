import React from 'react'
import Container from '../Container'
import Images from '../Images'
import common from '../../assets/commonImg.png'
import Heading from '../Heading'
import Pragraph from '../Pragraph'
import Flex from '../Flex'
import Pic2 from '../../assets/pic2.jpg'
import Pic4 from '../../assets/pic4.jpg'
import Pic5 from '../../assets/pic5.jpg'
import RedImg from '../../assets/redImg.png'

const Blog = () => {
  return (
    <section className="pt-[80px] pb-[118px] bg-[#F2F7FD]">
        <Container>
            <div className="w-[556px] mx-auto text-center mb-[52px]">
                <Images className="mx-auto text-center" src={common}/>
                <Heading className="font-open font-extrabold text-[#192239] text-[48px] pt-[16px] pb-[20px]" text="Our Latest Blog" as="h1"/>
                <Pragraph className="w-[412px] mx-auto  text-center font-regular font-robo text-[#6C7D93] text-[18px] leading-[30px]" text="We provide digital experience services to startups and small businesses."/>
            </div>
            <Flex className="gap-x-[30px]">
                <div className="w-[370px] h-[468px] bg-[#FFFFFF] rounded-2xl">
                    <div className="w-[100%] h-[241px]">
                        <Images className="rounded-t-2xl w-[100%] h-[100%]" src={Pic2}/>
                    </div>
                    <div className="py-[30px] px-[30px] relative">
                        <Heading className="pr-[100px] font-work font-medium text-[#413F45] text-[24px] leading-[32px] pb-[16px]" text="How to Be Ahead of Stock Changes" as="h5"/>
                        <Heading className="pr-[117px] font-nuni font-regular text-[#413F45] text-[18px] leading-[24px] pb-[30px]" text="By John  - 5 Comments" as="h6"/>
                        <Heading className="z-[999] pl-[15px] font-open font-bold text-[#202427] text-[18px] leading-[24px]" text="Read more" as="h2"/>
                        <div className="h-[33px] w-[33px] rounded-full absolute bottom-[25px] left-[28px]">
                            <Images src={RedImg}/>
                        </div>
                    </div>
                </div>
                <div className="w-[370px] h-[468px] bg-[#FFFFFF] rounded-2xl">
                    <div className="w-[100%] h-[241px]">
                        <Images className="rounded-t-2xl w-[100%] h-[100%]" src={Pic4}/>
                    </div>
                    <div className="py-[30px] px-[30px] relative">
                        <Heading className="pr-[100px] font-work font-medium text-[#413F45] text-[24px] leading-[32px] pb-[16px]" text="How to Be Ahead of Stock Changes" as="h5"/>
                        <Heading className="pr-[117px] font-nuni font-regular text-[#413F45] text-[18px] leading-[24px] pb-[30px]" text="By John  - 5 Comments" as="h6"/>
                        <Heading className="z-[999] pl-[15px] font-open font-bold text-[#202427] text-[18px] leading-[24px]" text="Read more" as="h2"/>
                        <div className="h-[33px] w-[33px] rounded-full absolute bottom-[25px] left-[28px]">
                            <Images src={RedImg}/>
                        </div>
                    </div>
                </div>
                <div className="w-[370px] h-[468px] bg-[#FFFFFF] rounded-2xl">
                    <div className="w-[100%] h-[241px]">
                        <Images className="rounded-t-2xl w-[100%] h-[100%]" src={Pic5}/>
                    </div>
                    <div className="py-[30px] px-[30px] relative">
                        <Heading className="pr-[100px] font-work font-medium text-[#413F45] text-[24px] leading-[32px] pb-[16px]" text="How to Be Ahead of Stock Changes" as="h5"/>
                        <Heading className="pr-[117px] font-nuni font-regular text-[#413F45] text-[18px] leading-[24px] pb-[30px]" text="By John  - 5 Comments" as="h6"/>
                        <Heading className="z-[999] pl-[15px] font-open font-bold text-[#202427] text-[18px] leading-[24px]" text="Read more" as="h2"/>
                        <div className="h-[33px] w-[33px] rounded-full absolute bottom-[25px] left-[28px]">
                            <Images src={RedImg}/>
                        </div>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Blog