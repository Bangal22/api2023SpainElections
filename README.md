# 2023SpainElections
Sentiment Analysis Project on Spanish Politics

## Description
This project aims to track in real time people's opinions and sentiment about Spanish politics. 

## Technologies
### Cloud:
        1. Apache NiFi
        2. Azure Function
        3. Azure Data Lake
        4. Azure Storage
        5. Azure SQL Server
        6. Azure Text Analytics
        7. Docker
        8. Twitter API
        9. Power BI.
### Frontend:
        1. Astro
        2. Svelte (islands)
        3. Chart.js
        4. Vercel
### Backend: 
        1. Node.js 
        2. Express.js
        3. Railway.app

## How it works
The project starts with the collection of tweets through the Twitter API using Apache NiFi. A data stream has been configured that extracts tweets containing keywords related to Spanish politics, more specifically the names of the most relevant political parties (PSOE, VOX, PP and Unidas Podemos) and sends them to an Azure function.

The Azure function uses Python to first store the raw data coming from nifi, then process the data to clean extract the most relevant information. Then, Azure Text Analytics is used to analyze the sentiment of each tweet and classify it as positive, negative or neutral.

The results of this analysis and the most relevant data are stored in an Azure SQL Server database and then accessed for real-time visualization in Power BI.

For web visualization a simple page has been created with Astro and an api made with Node.js.

## Visuals

#### Power Bi
![](assets/powerbi.png)

#### Nifi template
![](assets/nifi.png)

#### Azure schema 
![](assets/azure.png)

## Usage
To use this project, you need to have a Twitter account and an Azure account. Basic knowledge of Apache NiFi, Azure Function, Azure Data Lake Storage, Azure SQL Server, Python, Azure Text Analytics and Power BI is also required.

1. Configure a Twitter application and obtain API credentials.
2. Configure a SQL Server database in Azure.
3. Configure a data stream in Apache NiFi to extract tweets and send them to Azure Function.
4. Configure the Azure function and load the Python code that processes the tweets and analyzes them with Azure Text Analytics.
5. Set up a connection to the SQL Server database in the Azure function.
6. Create a dashboard in Power BI and connect it to the SQL Server database to visualize the results of the sentiment analysis.

## Roadmap
I am creating a small web site with Astro to show in real time the chart but it is not ready yet.

## Contributing
Feel free to fork the repository, make your own modifications and submit pull requests to add new features or improvements.

## Acknowledgment
I would like to thank my professor of the artificial intelligence and big data specialization cycle [Christian Arenas Navarro](https://es.linkedin.com/in/christianarenasnavarro) who is the one who helped me and motivated me to create this project.

