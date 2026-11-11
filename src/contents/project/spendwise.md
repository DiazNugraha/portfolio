# Spendwise

**Repository:** [github.com/DiazNugraha/SpendWise](https://github.com/DiazNugraha/SpendWise)

## Overview

Spendwise is engineered for instantaneous response times by writing directly to an embedded SQLite database first. Transactions are tracked locally regardless of network state, while a dedicated sync engine processes mutation queues in the background once connectivity is restored.

### Key Features

- **Local-First Writes:** Zero latency UI updates using native SQLite bindings.
- **Offline Mutation Queue:** Queued updates with exponential backoff retry execution.
- **Secure Auth Flow:** Google OAuth integration via PKCE flow backed by Supabase.
- **Fluid Motion System:** Custom screen transition animations built with `react-native-reanimated`.

## Tech Stack

| Layer                        | Technology                                                                         |
| :--------------------------- | :--------------------------------------------------------------------------------- |
| **Framework**                | React Native (`v0.82` Bare Workflow)                                               |
| **Language**                 | TypeScript                                                                         |
| **Database & ORM**           | SQLite (`op-sqlite`) + Drizzle ORM                                                 |
| **Auth & Cloud Persistence** | `@supabase/supabase-js` (`v2.110.7`) + `@react-native-async-storage/async-storage` |
| **Animations**               | `react-native-reanimated`                                                          |

## Architecture

```text
┌─────────────────────────┐
│     User Action (UI)    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Drizzle ORM + op-sqlite │ ──► Instant UI Update
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Background Sync Queue   │ ──► Reconciles when online
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  Supabase (PostgreSQL)  │
└─────────────────────────┘
```

## INSTALLATION

1. Clone Repository:

```bash
  git clone [https://github.com/DiazNugraha/SpendWise.git](https://github.com/DiazNugraha/SpendWise.git)
  cd SpendWise
```

2. Install Dependencies:

```bash
  npm install
```

3. Configure Environment Variables:

```bash
  cp .env.example .env
```

Add your Supabase credentials:

```bash
  PUBLIC_SUPABASE_URL=[https://your-project.supabase.co](https://your-project.supabase.co)
  PUBLIC_PUBLISHABLE_KEY=your-anon-key
```

4. Run Native Build:

- IOS:

```bash
  cd ios && pod install && cd ..
  npm ios
```

- Android:

```bash
  npm install
```
