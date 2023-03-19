import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { NftSolanaMarketplace } from "../target/types/nft_solana_marketplace";

describe("nft-solana-marketplace", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.NftSolanaMarketplace as Program<NftSolanaMarketplace>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
