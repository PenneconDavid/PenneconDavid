# Davey Rockets | Blockchain & Full-Stack Web3 Developer

![Profile Views](https://komarev.com/ghpvc/?username=PenneconDavid\&style=flat-square)

Welcome! I'm Dave, a **Full-Stack Web3 Developer** specializing in blockchain technologies, decentralized finance (DeFi), and innovative, user-focused applications.

---

## About Me

Full-stack blockchain developer with extensive expertise in Solidity, React, Next.js, and Node.js. Leveraging deep experience in financial modeling and mergers & acquisitions to build secure, efficient, and impactful blockchain solutions. Passionate about bridging traditional finance with cutting-edge Web3 technologies.

---

## Professional Experience

* **Director of M\&A | VetEvolve** *(May 2024 - Present)*

  * Lead detailed business valuation analyses, resulting in improved EBITDA accuracy.
  * Manage end-to-end transaction lifecycles, enhancing strategic investment decisions.
  * Streamline financial due diligence processes, significantly reducing processing times.

* **Director of Mergers & Acquisitions | Destination Pet** *(Nov 2022 - Jan 2024)*

  * Successfully oversaw the acquisition and integration of 67 veterinary practices.
  * Directed a team of analysts to achieve record-setting growth through strategic acquisitions.
  * Improved operational efficiency in valuation and financial modeling processes.

---

## Education

* **Full Stack Web3 Advanced Solidity Bootcamp** *(Metana, May 2024 - June 2025)*
* **BS, Business Administration** *(California Lutheran University, 2015)*

---

## Tech Stack

**Blockchain:**
![Solidity](https://img.shields.io/badge/Solidity-363636?style=for-the-badge\&logo=solidity\&logoColor=white)
![ethers.js](https://img.shields.io/badge/ethers.js-3C3C3D?style=for-the-badge\&logo=ethereum\&logoColor=white)
![Hardhat](https://img.shields.io/badge/Hardhat-FFD700?style=for-the-badge\&logo=hardhat\&logoColor=black)
![Foundry](https://img.shields.io/badge/Foundry-000000?style=for-the-badge\&logo=ethereum\&logoColor=white)
![IPFS](https://img.shields.io/badge/IPFS-65C2CB?style=for-the-badge\&logo=ipfs\&logoColor=white)
![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-4E5EE4?style=for-the-badge\&logo=openzeppelin\&logoColor=white)
![ERC-4337](https://img.shields.io/badge/ERC--4337-3C3C3D?style=for-the-badge\&logo=ethereum\&logoColor=white)

**Full-Stack Development:**
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=nextdotjs\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![viem](https://img.shields.io/badge/viem-000000?style=for-the-badge)
![wagmi](https://img.shields.io/badge/wagmi-000000?style=for-the-badge)

**Databases & DevOps:**
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge\&logo=mongodb\&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge\&logo=amazon-aws\&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge\&logo=git\&logoColor=white)

---

## Security & CI

![Slither](https://img.shields.io/badge/Slither-Static%20Analysis-2E3440?style=for-the-badge)
![Solhint](https://img.shields.io/badge/Solhint-Solidity%20Linter-2E3440?style=for-the-badge)
![CI](https://img.shields.io/badge/GitHub%20Actions-CI%20Gates-2088FF?style=for-the-badge\&logo=githubactions\&logoColor=white)
![Coverage](https://img.shields.io/badge/Coverage-lcov-green?style=for-the-badge)

* CI gates: build, tests, coverage (lcov), gas snapshots on PRs.
* Security: Slither static analysis; linting with Solhint.
* Artifacts: coverage and gas reports uploaded in CI.

---

## Areas of Expertise

* Account Abstraction (ERC-4337)
* Paymasters (verifying/sponsoring)
* Soulbound Tokens (ERC-5192)

---

## Recent Projects

### DAO Gas Reimbursement Paymaster (ERC-4337)

* **Role:** Smart Contract + Full-Stack Developer
* **Stack:** Solidity, Foundry, OpenZeppelin, ERC-4337 (EntryPoint v0.8), TypeScript, Next.js, viem, wagmi, GitHub Actions, Slither, Solhint
* **One-liner:** A verifying paymaster that sponsors gas for allowlisted smart accounts with monthly budgets, safety caps, and optional SBT receipts—plus a dashboard and reproducible local demo.
* **On-chain:**
  * BudgetPaymaster: per-sender monthly budgets, sender allowlist, per-op and fee caps, global cap, UTC month rollover, deposit/stake helpers, optional ReceiptNFT mint in postOp.
  * ReceiptNFT (SBT): ERC-721 with ERC-5192 "locked" semantics, one receipt per sponsored op.
  * GovActions: tiny target contract to demo allowlisting and sponsored calls.
* **Off-chain / Web:**
  * Next.js dashboard (wagmi/viem): view budget, call demo actions, preview AA userOps.
  * Scripts + Makefile: deploy, stake/deposit, seed budgets, set caps/global cap, local end-to-end demo.
  * CI: forge build/test, coverage (lcov), gas snapshots, Slither, Solhint, web build/lint.
* **How it works:** Validates UserOperations against sender budget and safety caps during validatePaymasterUserOp, then debits actual gas costs in postOp. Budgets reset at UTC month boundaries. Each sponsored op can mint a soulbound receipt.

### Ball Knower

* **What it is:** Next.js app that helps fantasy managers plan and draft. Blends MLB season lines, user-uploaded projections, and Baseball Savant skill metrics (EV, Barrel%, xwOBA) into a pgvector-backed RAG pipeline, then streams GPT answers with citations, player comparisons, and a cheat-sheet generator for custom scoring. Hybrid retrieval (vector + trigram), Redis caching, and unit/golden tests keep it fast and trustworthy.
* **Tech stack:** Next.js 14 (TS, App Router), Tailwind/shadcn, OpenAI (chat + embeddings), Prisma, Supabase Postgres + pgvector, Upstash Redis, Vitest, pino.
* **Key features:**
  * CSV projection upload, merge, anomaly flags
  * Skill Cards from Statcast; season/intent-aware retrieval
  * Streaming chat with citations; compare view; cheat-sheet generator
  * ETL + embedding jobs, rate limiting, logging, and golden tests

---

## Featured Projects

* [**OddScout**](https://odd-scout.vercel.app/)
  OddsScout is a comprehensive tool for comparing MLB betting odds between traditional sportsbooks and Polymarket's prediction markets. It provides real-time odds comparison, arbitrage detection, and detailed market analysis.

* [**Bulldog NFT Forge**](https://bulldog-nft.vercel.app/)
  Web3 app demonstrating minting, forging, burning, and trading of NFTs with ERC-1155 contracts deployed on Polygon Amoy.

---

## Project Archive

* [**Personal Portfolio**](https://daveyrockets.me/)
  Portfolio showcasing JWT authentication, protected routes, blog functionality, backend processing, responsive design, and Tailwind CSS.

---

## Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge\&logo=linkedin\&logoColor=white)](https://www.linkedin.com/in/davidseibold/)
[![Portfolio](https://img.shields.io/badge/Portfolio-2C2C2C?style=for-the-badge\&logo=web\&logoColor=white)](https://daveyrockets.me)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge\&logo=gmail\&logoColor=white)](mailto:d.seibold@icloud.com)

**Interested in collaborating or exploring opportunities?** Let's connect and innovate together in blockchain and Web3 development!!

---

## Goals

* Master Web3 technologies and continuously launch innovative decentralized apps.
* Collaborate within the developer community to drive innovation in blockchain and decentralized finance.
* Integrate my financial expertise with technological innovation to create secure and impactful blockchain solutions.

---

### 📈 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=PenneconDavid&show_icons=true&hide_border=true&count_private=true&theme=tokyonight" alt="Davey Rockets's GitHub Stats"/>
  <img src="https://nirzak-streak-stats.vercel.app?user=PenneconDavid&theme=tokyonight&hide_border=true" alt="PenneconDavid's GitHub Stats" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=PenneconDavid&theme=tokyonight" alt="GitHub Summary"/>
</p>

---

*P.S.: Feel free to leave feedback or connect—I’m always up for collaborating and learning!* 🚀

Support me here 👉 daveyrockets.eth
