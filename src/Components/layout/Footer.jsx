import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Logo from '../../assets/Logo.png'
import Pragraph from '../Pragraph'
import Heading from '../Heading'
import Features from '../Features'
import Support from '../Support'
import Products from '../Products'

const Footer = () => {
  return (
    <section className="pt-[140px] pb-[57px] bg-[#FFF]">
        <Container>
            <Flex>
                <div className="w-[449px] mr-[101px]">
                    <Images src={Logo}/>
                    <Pragraph className="font-regular font-nuni text-[#6C7D93] text-[18px] leading-[32px] capitalize pt-[63px]" text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page."/>
                </div>
                <Flex className="gap-x-[99px]">
                    <div className="w-[101px]">
                        <Heading className="font-open font-semibold text-[#413F45] text-[24px] leading-[33px] capitalize pb-[48px]" text="Features" as="h4"/>
                        <Features/>
                    </div>
                    <div className="w-[168px]">
                        <Heading className="font-open font-semibold text-[#413F45] text-[24px] leading-[33px] capitalize pb-[48px]" text="products" as="h4"/>
                        <Products/>
                    </div>
                    <div className="w-[161px]">
                        <Heading className="font-open font-semibold text-[#413F45] text-[24px] leading-[33px] capitalize pb-[48px]" text="support" as="h4"/>
                        <Support/>
                    </div>
                </Flex>
            </Flex>
            <Flex className="justify-between mt-[80px]">
                <Pragraph className="font-nuni font-regular text-[#6C7D93] text-[18px] leading-[42px] capitalize" text="@20201 Innovate.All rights reserved."/>
                <Flex className="w-[320px]">
                    <Pragraph className="font-nuni font-regular text-[#6C7D93] text-[18px] leading-[42px] capitalize "  text="Privacy policy"/>
                    <Pragraph className="font-nuni font-regular text-[#6C7D93] text-[18px] leading-[42px] capitalize pl-[60px]" text="Terms & condition"/>
                </Flex>
                    
              
            </Flex>
        </Container>
    </section>
  )
}

export default Footer