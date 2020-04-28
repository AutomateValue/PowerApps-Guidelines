# External applications (DH2200)

## DH2201 Implement handling of API limits for external applications
External applications may reach the API limits and start throwing an exception. If you are developing a third party application, then you should always implement this to avoid crashes. Below is a table of the different error codes and their description. 
| Error Code | Description |
| --| -- |
| -2147015902 | Number of requests exceeded the limit of X over time window of 300 seconds. |
| -2147015903 | Combined execution time of incoming requests exceeded limit of X milliseconds over time window of 300 seconds. Decrease number of concurrent requests or reduce the duration of requests and try again later. |
| -2147015898 | Number of concurrent requests exceeded the limit of X. |

The ErrorDetails of the FaultException contains a 'Retry-After' property that specifies in how much time you can try again (see code below). 

````
ex.Detail.ErrorDetails["Retry-After"] as TimeSpan?
````
