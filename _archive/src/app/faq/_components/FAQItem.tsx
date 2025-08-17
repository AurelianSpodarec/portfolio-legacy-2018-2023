export interface IFAQItem {
  title: string;
  description: string;
}

function FAQItem({ title, description }: IFAQItem) {
  return (
    <div className="flex">
      <div className="mr-2 flex justify-center align-middle">
        <span className="h-7 w-7 flex justify-center align-middle bg-[#f2a538] text-sm font-bold rounded-full text-white">Q</span>
      </div>
      <div>
        <h3 className="font-extrabold text-lg text-[#333]">{title}</h3>
        <p className="text-base text-[#808080]">{description}</p>
      </div>
    </div>
  )
}

export default FAQItem;
