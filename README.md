# loopback4-connector-firestore
Firebase Firestore connector for the LoopBack4 framework.


I needed an easy way to connect a Loopback application to [Firebase][7]'s NoSQL database [Firestore][6] so that i decided to build this connector.

### Installation
If you want to know how to get started with Loopback4 [check this][5].

To add a new data source, use the data source generator:
```sh
lb4 datasource
```
Then the data source generator will prompt some questions like

 - Enter the data-source name: **Firestore** *(Choose your prefered name)*
 - Select the connector for Firestore: **other**
 - Enter the connector's module name **loopback4-connector-firestore**
 - Install loopback4-connector-firestore (Y/n) **y**

Then you should use a service account. Go to [Project Settings > Service Accounts][4] in the Google Cloud Platform Console. Generate a new private key and save the JSON file.

You should fill the application's datasource file which is located in `/server/datasources.json`  with those details, You can find them in the downloaded JSON file from the Google Cloud Platform.

```json
"firestore": {
  "name": "firestore",
  "projectId": "",
  "clientEmail":  "",
  "privateKey": "",
  "databaseName": "Optional, Default: projectId"
}
```

#### Connection properties

| Property | Type&nbsp;&nbsp; | Description | --- |
| --- | --- | --- | --- |
| projectId | String | project_id in the JSON file | --- |
| clientEmail | String | client_email in the JSON file | --- |
| privateKey | String | private_key in the JSON file | --- |
| databaseName | String | Firebase's project id | Optional, Default: projectId | --- |

And you can actually store those private details as an Environment variables, Check [source-configuration][8]


### Build and test from source
Download google service json key file to test folder and rename it to config.json
```
npm test
```

### Inspiration
I've got inspired by the Official [MongoDB connector][3] by Loopback

### License
Copylefted (c) 2021 [Bui Dinh Ngoc][1] Licensed under the [MIT license][2].
Copylefted (c) 2017 [Dyaa Eldin Moustafa][1] Licensed under the [MIT license][2].


  [1]: https://github.com/ngocbd/
  [2]: https://github.com/ngocbd/loopback4-connector-firestore/blob/master/LICENSE
  [3]: https://github.com/strongloop/loopback-connector-mongodb/
  [4]: https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts
  [5]: http://loopback.io/getting-started/
  [6]: https://firebase.google.com/products/firestore/
  [7]: https://firebase.google.com
  [8]: https://loopback.io/doc/en/lb4
