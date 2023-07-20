import { Decorator } from "@storybook/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const WithCustomFont: Decorator = (Story) => (
  <>
    <div className={`${inter.className} font-storybook`}>
      <Story />
    </div>
  </>
)
