# View Naming Conventions

## **Naming Pattern**

```
[Keyword if needed] [Purpose/Condition] [(Optional note)]
```

- Use **Title Case**.  
- Avoid repeating the entity name unless needed for clarity.  
- Keep under ~40 characters where possible.  

---

## **View Types & Conventions**

### **1. Public Views** *(main grid/shared views)*
- **No keyword** — just the purpose.  
- Examples:  
  - `Active Opportunities`  
  - `My Open Cases`  
  - `High Priority`  
  - `All Records (Export)`  

---

### **2. Quick Find Views** *(main grid search results)*  
- **Keyword:** `Search by …`  
- Name describes **fields users can search on**.  
- Examples:  
  - `Search by Name and Email`  
  - `Search by Topic and Customer`  

---

### **3. Advanced Find Views** *(complex filter/search results)*  
- **Keyword:** `Advanced Find`  
- Use just the keyword unless you have multiple Advanced Find views.  
- Examples:  
  - `Advanced Find` *(typical — one per entity)*  
  - `Advanced Find Full Columns`  
  - `Advanced Find Minimal Columns`  

---

### **4. Lookup Views** *(lookup field search results)*  
- **Keyword at the end:** `[Purpose/Condition] Lookup`  
- Examples:  
  - `Active Accounts Lookup`  
  - `Open Opportunities Lookup`  
  - `Minimal Columns Lookup`  

---

### **5. Subgrid Views** *(inline on forms or dashboards)*  
- **Keyword:** `Inline …`  
- Examples:  
  - `Inline Recent Activities`  
  - `Inline Open Cases`  
  - `Inline Last 30 Days (Dashboard)`  

---

### **6. Associated Views** *(under “Related” menu)*  
- **Keyword:** `Related …`  
- Examples:  
  - `Related Active Opportunities`  
  - `Related Closed Cases`  
  - `Related High Priority Work Orders`  

---

## **Optional Suffixes**
- **(Export)** – extra columns for Excel export  
- **(Minimal)** – fewer columns for speed  
- **(Dashboard)** – optimized for dashboards  

---

## **Example Set for “Spotler Permissions”**
- **Public:** `Active Permissions`  
- **Quick Find:** `Search by Name and Email`  
- **Advanced Find:** `Advanced Find`  
- **Lookup:** `Active Permissions Lookup`  
- **Inline:** `Inline Active Permissions`  
- **Related:** `Related Active Permissions`  

---


# View Naming Rules – Quick Reference

| View Type | Keyword Position | Pattern | Examples |
|-----------|------------------|---------|----------|
| **Public Views** | None | `[Purpose/Condition]` | Active Opportunities, My Open Cases, High Priority, All Records (Export) |
| **Quick Find Views** | Start | `Search by [Fields]` | Search by Name and Email, Search by Topic and Customer |
| **Advanced Find Views** | Start | `Advanced Find [Optional Scope]` | Advanced Find, Advanced Find Full Columns, Advanced Find Minimal Columns |
| **Lookup Views** | End | `[Purpose/Condition] Lookup` | Active Accounts Lookup, Open Opportunities Lookup, Minimal Columns Lookup |
| **Subgrid Views** | Start | `Inline [Purpose/Condition]` | Inline Recent Activities, Inline Open Cases, Inline Last 30 Days (Dashboard) |
| **Associated Views** | Start | `Related [Purpose/Condition]` | Related Active Opportunities, Related Closed Cases, Related High Priority Work Orders |

**Optional Suffixes:**
- (Export) – extra columns for Excel export  
- (Minimal) – fewer columns for speed  
- (Dashboard) – optimized for dashboards  

**Example Set for “Spotler Permissions”**
- Public: `Active Permissions`  
- Quick Find: `Search by Name and Email`  
- Advanced Find: `Advanced Find`  
- Lookup: `Active Permissions Lookup`  
- Inline: `Inline Active Permissions`  
- Related: `Related Active Permissions`