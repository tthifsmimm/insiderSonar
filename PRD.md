## Product Requirements Document (PRD) - InsiderSonar Crypto Intelligence

**Project Name:** InsiderSonar Crypto Intelligence (working title)
**Date:** July 20, 2024
**Version:** 1.0 (MVP)

---

### 1. Project Overview & Core Goal

*   **Core Concept:** A web application designed to help traders identify profitable investment opportunities in the cryptocurrency market.
*   **Main Goal:** To build a web application that provides insights into cryptocurrency investment by specifically tracking insider (or "whale") wallets and their activities.

---

### 2. Key Features (Minimum Viable Product - MVP)

The essential functionalities for the hackathon MVP include:

1.  **Insider/Whale Wallet List:** Display a curated list of tracked "insider" or "whale" wallets.
2.  **Wallet Detail View:** Provide detailed transaction history and current holdings for each tracked wallet.
3.  **Basic Filtering & Sorting:** Offer fundamental filtering and sorting options for transactions/coins within wallet details.
4.  **Top Wallets by Returns:** Showcase a list of insider/whale wallets ranked by their highest historical returns.
5.  **Top Coins by Popularity:** Identify cryptocurrencies invested in by the most tracked insider wallets.
6.  **Top Coins by Returns:** Highlight cryptocurrencies with the highest returns, aggregated from insider activity.
7.  **Insider Leaks:** Implement functionality to reveal early or impactful insider information/alerts.

*Future Considerations (Post-MVP):* Personalized Watchlists for Wallets and Coins, Real-time Alerts/Notifications for Key Activities.

---

### 3. User Personas/Types

*   **Primary Persona:** **Amateur to Mid-Level Crypto Trader**
    *   **Description:** Individuals with a basic to intermediate understanding of cryptocurrency and trading.
    *   **Needs:** Actively seeking an edge or new insights beyond traditional analysis, comfortable with web applications and data, aiming to discover profitable opportunities by understanding significant market players' moves.

---

### 4. User Flows

#### A. Core Wallet Tracking Flow:

1.  **Arrive at Application:** User navigates to the web application.
2.  **View Insider Wallet List:** User sees a curated list of "insider" wallets on the main page/dedicated wallet list.
3.  **Select a Wallet:** User clicks on a specific wallet from the list.
4.  **View Wallet Details:** User is taken to a dedicated page showing detailed transaction history and current holdings for the chosen wallet.
5.  **Apply Filters/Sorts (Optional):** User refines the view using basic filters (e.g., by coin, buy/sell) or sorts transactions (e.g., by date, amount).

#### B. Top Wallets/Coins Flows:

1.  **View Top Wallets by Highest Returns:** User navigates to the application, clicks on a "Top Wallets" section, sees a list sorted by returns, and can click on a wallet for details.
2.  **View Top Coins Invested by Most People:** User navigates to the application, clicks on a "Top Coins" or "Popular Investments" section, and sees a list of coins sorted by the number of insider wallets holding them.
3.  **View Top Coins with Highest Returns:** User navigates to the application, clicks on a "Top Performing Coins" section, and sees a list of coins sorted by their aggregated insider returns.

#### C. Insider Leaks Flow:

1.  **Access Insider Leaks:** User navigates to the application, clicks on an "Insider Leaks" or "Early Insights" section.
2.  **View Leak Feed:** Application presents a chronological stream or list of "leak" events with actionable descriptions. User can click for more context or related wallet/coin details.

---

### 5. Page/Screen Planning

#### 1. Homepage/Dashboard

*   **Purpose:** Overview and central navigation.
*   **Content:** Truncated lists/highlights of "Top Wallets by Highest Returns," "Top Coins Invested by Most People," "Top Coins with Highest Returns," and recent "Insider Leaks." Clear navigation links.
*   **Interactive Elements:** Clickable wallet/coin entries, "View All" links.
*   **Layout:** Dashboard-style with distinct cards/sections.

#### 2. Wallet List Page

*   **Purpose:** Full list of tracked wallets.
*   **Content:** Table/list of wallets with address, performance metrics, last update. Search/filter bar.
*   **Interactive Elements:** Clickable wallet addresses, sortable columns.
*   **Layout:** Data-table heavy, optimized for scanning.

#### 3. Wallet Detail Page

*   **Purpose:** Detailed view of a single wallet.
*   **Content:** Wallet address, summary stats, "Current Holdings" table (Coin, Quantity, Value, % Portfolio), "Transaction History" table (Date, Coin, Type, Amount, Price, Hash).
*   **Interactive Elements:** Filter toggles/dropdowns, sortable headers, blockchain explorer links.
*   **Layout:** Tabbed interface or distinct sections for holdings/transactions.

#### 4. Coins Page (Aggregated Top Coins)

*   **Purpose:** Display "Top Coins Invested by Most People" and "Top Coins with Highest Returns."
*   **Content:** Two sections/tabs, each with coin name/symbol and relevant metric.
*   **Interactive Elements:** Clickable coin names, view toggles.
*   **Layout:** Similar to Wallet List Page.

#### 5. Insider Leaks Page

*   **Purpose:** Dedicated view for all leak notifications.
*   **Content:** Chronological feed of leak events (timestamp, description, related wallet/coin). Basic filtering.
*   **Interactive Elements:** Clickable links to relevant wallets/transactions, filter options.
*   **Layout:** Feed-style, prioritizing recency and readability.

---

### 6. Interaction & UX Details

*   **Global Interactions (Navigation/Data Fetch):**
    *   **Trigger:** Any page navigation or data fetch.
    *   **Response:** Subtle loading spinner/progress bar, skeleton loading states for data areas.
    *   **Next:** Content populates after data.
    *   **Responsiveness:** Fully responsive design for all screen sizes.
    *   **Error States:** Clear, user-friendly error messages (e.g., "Failed to load data," "Retry" button).
    *   **Empty States:** Informative messages for no data (e.g., "No transactions found," "Adjust filters").
*   **Filtering & Sorting:**
    *   **Trigger:** Filter selection, search input, sort column click.
    *   **Response:** Localized loading indicator, visual highlight of selection.
    *   **Next:** Immediate data update.
*   **Clicking Wallet/Coin Entries:**
    *   **Trigger:** Click on a wallet address or coin name.
    *   **Response:** Brief hover/active state.
    *   **Next:** Navigation to corresponding detail page.

---

### 7. API Design

All endpoints are `GET` requests, publicly accessible for MVP. Responses are JSON.

1.  **`GET /api/v1/wallets`**: Get all tracked wallets (summary info).
    *   **Response Fields:** `id`, `address`, `total_value_usd`, `overall_return_percentage`, `last_active`.
2.  **`GET /api/v1/wallets/{wallet_id}`**: Get single wallet details.
    *   **Response Fields:** `id`, `address`, `total_value_usd`, `overall_return_percentage`, `current_holdings` (list of `coin_symbol`, `quantity`, `current_value_usd`), `transaction_history` (list of `transaction_id`, `date`, `coin_symbol`, `type`, `amount`, `price_usd`, `hash`).
3.  **`GET /api/v1/wallets/top-returns`**: Get wallets sorted by highest returns.
    *   **Response Fields:** Same as `Get All Tracked Wallets`, but sorted.
4.  **`GET /api/v1/coins/top-popular`**: Get coins invested by most people.
    *   **Response Fields:** `coin_symbol`, `num_insider_wallets`, `total_volume_usd_by_insiders`.
5.  **`GET /api/v1/coins/top-returns`**: Get coins with highest returns (from insider activity).
    *   **Response Fields:** `coin_symbol`, `insider_return_percentage`, `num_insider_wallets_holding`.
6.  **`GET /api/v1/leaks`**: Get chronological insider leak events.
    *   **Response Fields:** `leak_id`, `timestamp`, `description`, `related_wallet_id` (nullable), `related_coin_symbol` (nullable), `type`.

---

### 8. Database Structure

*(Note: Detailed schema paused temporarily. General intention is a relational database like PostgreSQL.)*

*   **`wallets` Table:** Stores tracked wallet addresses, tracking start date, aggregated value/returns, last update.
*   **`transactions` Table:** Records individual blockchain transactions (buys, sells, transfers) by tracked wallets, linking to `wallets`.
*   **`coins` Table:** Stores cryptocurrency metadata and current market data.
*   **`wallet_coin_holdings` Table (Optional):** Pre-calculated current holdings for each wallet for performance.
*   **`leaks` Table:** Stores identified "insider leak" events with descriptions and timestamps.

---

### 9. System Design/Architecture

*   **Architecture:** Monolithic (for hackathon efficiency).
*   **Components:**
    *   **Frontend (Client-Side):** User interface, consumes backend API.
    *   **Backend (Server-Side):** Single application handling API endpoints, data aggregation/processing from external sources, and database interaction.
    *   **External Data Sources:** Blockchain Explorers/APIs (e.g., Etherscan, Dune Analytics), Coin Market Data APIs (e.g., CoinGecko).
*   **Communication:** Frontend to Backend via HTTP/HTTPS; Backend to External Data Sources via their respective APIs.
*   **Considerations (MVP):** Focus on functionality, basic security (API key handling), simplified deployment.
