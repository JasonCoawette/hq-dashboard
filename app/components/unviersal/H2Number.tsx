export default function H2Number({ number, color = 'primaryFG' }: { number: number; color?: string }) {
    return (
      <h2 className={`text-[24px] sm:text-[32px] md:text-[48px] font-geist font-regular font-normal leading-none tracking-[-0.04em] self-stretch text-${color}`}>
        {number}
      </h2>
    );
  }