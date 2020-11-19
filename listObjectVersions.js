// Drawback of this method is that we need to fetch all the pages (up to 1000 versions per page) to learn what are latest (IsLatest) files.
// Each record represents one version of the object for given prefix

// s3.listObjectVersions({ Prefix: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001' })
// response:

{
  IsTruncated: false,
  KeyMarker: '',
  VersionIdMarker: '',
  Versions: [
    {
      ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
      Size: 0,
      StorageClass: 'STANDARD',
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/',
      VersionId: 'UkXRHbdEPGBOjrs6w8iUWKqLSbMNX9Ui',
      IsLatest: true,
      LastModified: 2020-11-12T01:54:10.000Z,
      Owner: [Object]
    },
    {
      ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
      Size: 0,
      StorageClass: 'STANDARD',
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/',
      VersionId: 'cxRyax3IxOzy6SP3VPDwFgWdWCXG3qfA',
      IsLatest: true,
      LastModified: 2020-11-12T01:54:56.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'TEn7hHOUE0Gi8QDHaSnLILbRqxxFgkOR',
      IsLatest: false,
      LastModified: 2020-11-19T21:54:40.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'Cgu5gaQWqow0JinPwDGkt2SeXOmEXcFw',
      IsLatest: false,
      LastModified: 2020-11-19T21:41:52.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'GLACIER',
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'CHkRz3HcPjARryrVHsfSgzj628nBiGDc',
      IsLatest: false,
      LastModified: 2020-11-12T01:55:24.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'GLACIER',
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      VersionId: 'woWEWXjO2ABXJS20Np4FzqME4axC3cS_',
      IsLatest: true,
      LastModified: 2020-11-12T01:55:27.000Z,
      Owner: [Object]
    },
    {
      ETag: '"72ef4d54ea3fdcb4211bf1f47e091b4f"',
      Size: 73093,
      StorageClass: 'GLACIER',
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/3.pdf',
      VersionId: 'OcK0RlxahVZvNWZQ_N_X725mk4.og6_P',
      IsLatest: true,
      LastModified: 2020-11-12T01:55:22.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'GLACIER',
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/SoilSurvey/1.pdf',
      VersionId: 'aDyJNlwT56FVQ0Ic6bvQOrfeZKRUXNm8',
      IsLatest: true,
      LastModified: 2020-11-19T21:52:00.000Z,
      Owner: [Object]
    },
    {
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD',
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/SoilSurvey/1.pdf',
      VersionId: 'nGgCKQnTsmBXSWw3mvpZwzHfibYubrka',
      IsLatest: false,
      LastModified: 2020-11-19T21:51:23.000Z,
      Owner: [Object]
    }
  ],
  DeleteMarkers: [
    {
      Owner: [Object],
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'fSlb74U749ImTVDxwJUyoO1pw79yKl8n',
      IsLatest: true,
      LastModified: 2020-11-19T21:54:44.000Z
    },
    {
      Owner: [Object],
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      VersionId: 'LlOc969tdzBdJ2QU6tMYqziYqfbe9Det',
      IsLatest: false,
      LastModified: 2020-11-19T21:54:34.000Z
    }
  ],
  Name: 'test-bucket-11-11-2020-object-lock',
  Prefix: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/',
  Delimiter: '',
  MaxKeys: 1000,
  CommonPrefixes: []
}
