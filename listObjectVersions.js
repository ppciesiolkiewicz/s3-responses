// Drawback of this method is that we need to fetch all the pages (up to 1000 versions per page) to learn what are latest (IsLatest) files.
// Each record represents one version of the object for given prefix

// s3.listObjectVersions({ Prefix: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001' })
// response:

{
  IsTruncated: false,
  KeyMarker: '',
  VersionIdMarker: '',
  Versions: [
    {
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'j6Y0WTq7ckVG0Osan1.quU5Q6FbAB9u9',
      LastModified: 2020-11-16T04:24:32.000Z,
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      IsLatest: true,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: '_xwz_hExg1dJ48ST38FqpfLc5D8s8HqQ',
      IsLatest: false,
      LastModified: 2020-11-16T04:21:23.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'FGfm7I0Eghb7vlZCP2KwRs1PqkvT7cpj',
      IsLatest: false,
      LastModified: 2020-11-16T04:20:31.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'vL.Ve8cluTrMrvL5LLbXNbV3Ce_s_Di4',
      IsLatest: false,
      LastModified: 2020-11-16T04:19:26.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'W31_0TGsGPH_qwX2yt_8L7BEh8iwprUr',
      IsLatest: false,
      LastModified: 2020-11-16T04:11:19.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'shVxGkMxi7A27Wlj6Cx2oU0k5v5PN6ML',
      IsLatest: false,
      LastModified: 2020-11-16T04:02:48.000Z,
      Owner: [Object]
    },
    {
      ETag: '"bd518d5f82413023152db56168329c5f"',
      Size: 38729,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'nCzpOPUbrDr6KZwN40Jappzm1gPjF37U',
      IsLatest: false,
      LastModified: 2020-11-16T02:26:04.000Z,
      Owner: [Object]
    },
    {
      ETag: '"bd518d5f82413023152db56168329c5f"',
      Size: 38729,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: '6dFnn4QU98HuwJy0TSyIQ_mkn0is1TTZ',
      IsLatest: false,
      LastModified: 2020-11-13T00:16:52.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'jVaFYoDPVXAKd5nW9K1RuzZM.EdWs8bQ',
      IsLatest: false,
      LastModified: 2020-11-13T00:09:44.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'mUlBENyC_T7sty02J_ZRf4eqNQ0Ivfck',
      IsLatest: true,
      LastModified: 2020-11-16T03:57:04.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'tqAuyLESkjJfi85NJJlkQs7DxE.RRoV5',
      IsLatest: false,
      LastModified: 2020-11-16T03:53:10.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'vRohx7gTH0eG1NQmQujwriZBRsmz3msG',
      IsLatest: false,
      LastModified: 2020-11-16T03:50:07.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'CGwgOrhpq4kdJjfjjC0hq4Wy7x3LR6AG',
      IsLatest: false,
      LastModified: 2020-11-16T03:49:18.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'w8IyGRubpMY5zlwlpkaVQLALrR.PFSug',
      IsLatest: false,
      LastModified: 2020-11-16T03:47:17.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'hm3Xu53fG49MjwTm3GFfv9MAPNuYmU1D',
      IsLatest: false,
      LastModified: 2020-11-16T03:46:50.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'UHryBh_vSMZgqBeB1A1ruoeRggCgUaKJ',
      IsLatest: false,
      LastModified: 2020-11-13T00:16:52.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'AFMNWGMsd1QGrJubS0t2jHL0kIr28bpS',
      IsLatest: false,
      LastModified: 2020-11-13T00:09:44.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'OLpOH2JUSdw0qIkL5dOxEGFc3NBACDgt',
      IsLatest: false,
      LastModified: 2020-11-12T22:51:03.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'ckPZIfbi3nD2aqnvBtp383fmskkmG9Me',
      IsLatest: false,
      LastModified: 2020-11-12T00:54:53.000Z,
      Owner: [Object]
    },
    {
      ETag: '"7627677f75d152057b20f2f177da5873"',
      Size: 74737,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/3.pdf',
      VersionId: 'SWLQwrQGdaofyMWqZOrNjr8JXhiRxiBk',
      IsLatest: true,
      LastModified: 2020-11-16T03:47:08.000Z,
      Owner: [Object]
    },
    {
      ETag: '"7627677f75d152057b20f2f177da5873"',
      Size: 74737,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/3.pdf',
      VersionId: '0m781SB90GauYlWA52hPfCwaINECMlra',
      IsLatest: false,
      LastModified: 2020-11-13T00:16:52.000Z,
      Owner: [Object]
    },
    {
      ETag: '"72ef4d54ea3fdcb4211bf1f47e091b4f"',
      Size: 73093,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/3.pdf',
      VersionId: 'WY8tu9GRCIPEHuLOrVcH55mAMznvjG20',
      IsLatest: false,
      LastModified: 2020-11-13T00:09:44.000Z,
      Owner: [Object]
    },
    {
      ETag: '"bd518d5f82413023152db56168329c5f"',
      Size: 38729,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandSurvey/1.pdf',
      VersionId: 'YxnX2Mh8UnMWNnfp_.sdtTq1bXYhGURF',
      IsLatest: true,
      LastModified: 2020-11-15T23:04:52.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandSurvey/2.pdf',
      VersionId: 'cnfzeBUtrscNn8Va8I_Nx0o.uYWwph_w',
      IsLatest: true,
      LastModified: 2020-11-15T23:04:53.000Z,
      Owner: [Object]
    },
    {
      ETag: '"7627677f75d152057b20f2f177da5873"',
      Size: 74737,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandSurvey/3.pdf',
      VersionId: 'raqT3uCzpFSTeQfocA29gOoze2UJBOJk',
      IsLatest: true,
      LastModified: 2020-11-15T23:04:52.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/SoilSurvey/1.pdf',
      VersionId: 'AjaKBwzyOVtqBJb1uQvDO82zQbMv0xzO',
      IsLatest: true,
      LastModified: 2020-11-12T04:11:23.000Z,
      Owner: [Object]
    },
    {
      ETag: '"72ef4d54ea3fdcb4211bf1f47e091b4f"',
      Size: 73093,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/SoilSurvey/3.pdf',
      VersionId: 'Ano7S40vv05jB4A8lbPS633L.QOZtsHF',
      IsLatest: false,
      LastModified: 2020-11-12T01:04:04.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000002/LandDeed/1.pdf',
      VersionId: 'UROSH6BBQoRkgP42.oxPpQd4KT2_4BkW',
      IsLatest: true,
      LastModified: 2020-11-12T23:33:55.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000002/LandDeed/2.pdf',
      VersionId: 'OBnk3RVPoYHaUTj4GAksNLJLGtsU314x',
      IsLatest: true,
      LastModified: 2020-11-12T23:36:32.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000002/LandDeed/2.pdf',
      VersionId: 'dwCPlPWqSgus2YlcpEgkv3wGD7inIMuh',
      IsLatest: false,
      LastModified: 2020-11-12T23:04:38.000Z,
      Owner: [Object]
    },
    {
      ETag: '"72ef4d54ea3fdcb4211bf1f47e091b4f"',
      Size: 73093,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000002/LandDeed/3.pdf',
      VersionId: 'm.TLtp_APbnlyUWXoEXB7So1dJSHbaEd',
      IsLatest: true,
      LastModified: 2020-11-12T23:33:55.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD',
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000002/SoilSurvey/2.pdf',
      VersionId: '0Oy5QfHJMiwwOJUpFhyGgK.srCYs4Mnp',
      IsLatest: true,
      LastModified: 2020-11-12T23:32:53.000Z,
      Owner: [Object]
    }
  ],
  DeleteMarkers: [
    {
      Owner: [Object],
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: '31F_NZOLnkjY67ofVM0hbouou6OqSlHB',
      IsLatest: false,
      LastModified: 2020-11-16T02:25:59.000Z
    },
    {
      Owner: [Object],
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'rHG1PRyxHfU0nwBCVQETtIt98RqIYz4B',
      IsLatest: false,
      LastModified: 2020-11-12T22:50:57.000Z
    },
    {
      Owner: [Object],
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/SoilSurvey/3.pdf',
      VersionId: 'b8l_cSBXgF4MzCfaNJGxtmszbCDJO96r',
      IsLatest: true,
      LastModified: 2020-11-12T01:24:20.000Z
    },
    {
      Owner: [Object],
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000002/LandDeed/2.pdf',
      VersionId: 'oagG9ebvx7pYQux6xk7fkGXavuaheF7i',
      IsLatest: false,
      LastModified: 2020-11-12T23:35:28.000Z
    }
  ],
  Name: 'test-bucket-11-11-2020-object-lock',
  Prefix: 'applications/10000000-0000-0000-0000-000000000000/',
  Delimiter: '',
  MaxKeys: 1000,
  CommonPrefixes: []
}

