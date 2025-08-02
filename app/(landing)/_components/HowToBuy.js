import React from "react";
import OrderCard from "@/components/OrderCard";
import ContractAddress from "@/components/ContractAddress";

const HowToBuy = () => {
  return (
    <div id="buy" className="max-w-[85rem] mx-auto p-12">
      <div className="my-16">
        <div
          className="text-center text-6xl font-luckiest-guy mb-8 sm:text-6xl text-[50px] sm:mb-8 -mb-[2px]"
          style={{
            color: "rgba(196, 43, 16, 1)",
            textShadow:
              "4px 4px 0 #000, 6px 6px 0 #000, 0 4px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 2px 2px 0 #000",
          }}
        >
          HOW TO BUY
        </div>
        <h2
          className="font-stopbuck text-6xl text-duis text-center"
          style={{ textShadow: "4px 0 5px rgba(255, 255, 255, 1)" }}
        ></h2>
        <h3 className="font-stopbuck text-2xl text-center text-black sm:pt-0 pt-[10px] sm:text-2xl text-[18px]">
          {`Just 4️⃣ steps to get rich 🤑`}
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 justify-items-center">
        <OrderCard order={1} title={"create a wallet"} style={"rotate-3"}>
          <span>
            Download{" "}
            <a
              href="https://phantom.app"
              target="_blank"
              className="uppercase font-extrabold text-[#ab9ff2] text-2xl"
            >
              phantom
            </a>{" "}
            or your{" "}
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              Solana
            </span>{" "}
            wallet of choice and follow the simple steps to create a new
            account.
          </span>
        </OrderCard>
        <OrderCard order={2} title={"GET SOME SOL"} style={"-rotate-6"}>
          <span>
            If you don&apos;t have any{" "}
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              $SOL
            </span>
            , you can buy directly on{" "}
            <a
              href="https://phantom.app"
              target="_blank"
              className="uppercase font-extrabold text-[#ab9ff2] text-2xl"
            >
              phantom
            </a>{" "}
            , transfer from another wallet, or buy on another exchange and send
            it to your wallet.
          </span>
        </OrderCard>
        <OrderCard order={3} title={"swap $Sol for $kitty"} style={"-rotate-1"}>
          <span>
            <p>
              Paste the token address (CA) into your search bar and swap{" "}
              <b>$SOL</b> for <b>$KITTY</b>
            </p>
            <p>
              <br />
            </p>
            There&apos;s zero taxes so you don&apos;t need to worry.
          </span>
        </OrderCard>
        <OrderCard order={4} title={""} style={"rotate-2"}>
          <span>
            Welcome to the <br />
            <span className="uppercase font-extrabold text-2xl underline decoration-duis pb-5">
              KITTY Family
            </span>
            !
          </span>
        </OrderCard>
      </div>

      <div className="my-16"></div>
    </div>
  );
};

export default HowToBuy;
