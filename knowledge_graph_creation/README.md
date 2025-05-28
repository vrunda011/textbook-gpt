# 🎓 Knowledge Graph Creation

<p align="center">
<img src="./neo4j.png" alt="Neo4j Logo" style="width: 50%; max-width: 400px;" />
</p>

<p align="center">
  <em>Exported Neo4j database dump for the <strong>Textbook-GPT</strong> project.</em>
</p>

---

## 📦 Contents

- 📁 `neo4j_export.cypher` — The Neo4j database export file containing the knowledge graph data.  
- 📄 `README.md` — Instructions on how to import and use the exported database.

---

## 🤔 What is Neo4j?

Neo4j is a **graph database** that stores data as **nodes and relationships**, making it ideal for knowledge graphs. This project uses Neo4j to represent and query interconnected textbook information.


---

## 🎯 Purpose

The `neo4j_export.cypher` file is an export of the entire Neo4j knowledge graph database used in this project. It allows anyone who clones the repository to **recreate the database locally** and run the project with the same data.

---

## 🚀 How to Import the Knowledge Graph Database

Follow these steps to import the Neo4j database dump into your local Neo4j instance:

### 🔧 Prerequisites

- Install [Neo4j Desktop](https://neo4j.com/download/) or [Neo4j Community Edition](https://neo4j.com/download-center/)  
- Start your Neo4j database server and note the username and password (default username is `neo4j`)

### 📥 Import Steps

1. **Locate the import directory**

   Neo4j requires files to be imported from its `import` directory. Copy the `neo4j_export.cypher` file to this directory.

   - For Neo4j Desktop, the `import` directory path can be found in the database settings.  
   - For Neo4j Community Edition, it is usually located at `$NEO4J_HOME/import`

2. **Open Neo4j Browser**

   Access the Neo4j Browser at [http://localhost:7474](http://localhost:7474) and log in.

3. **Import the database using the cypher script**

   Run the following command in the Neo4j Browser to execute the import:

   ```cypher
   :source neo4j_export.cypher

## ⚠️ Notes

- Make sure the Neo4j server is **running** before attempting the import.

- If you get permission errors when running `:source neo4j_export.cypher`, double-check that the file is in Neo4j’s import directory and that Neo4j has permission to read it.

- Large files may take some time to import.

- Alternatively, you can open the `neo4j_export.cypher` file in a text editor, copy all the content, and paste it directly into the Neo4j Browser query window and run it.

