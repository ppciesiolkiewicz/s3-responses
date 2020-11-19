// The drawback of this method is that it doesn't return object version
// It lists all the latest object versions (ls)

// s3.listObjectsV2({
//   Prefix: prefix,
// })
// response:
{
  IsTruncated: false,
  Contents: [
    {
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      LastModified: 2020-11-16T23:21:52.000Z,
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandSurvey/1.pdf',
      LastModified: 2020-11-15T23:04:52.000Z,
      ETag: '"bd518d5f82413023152db56168329c5f"',
      Size: 38729,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandSurvey/2.pdf',
      LastModified: 2020-11-15T23:04:53.000Z,
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandSurvey/3.pdf',
      LastModified: 2020-11-15T23:04:52.000Z,
      ETag: '"7627677f75d152057b20f2f177da5873"',
      Size: 74737,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/SoilSurvey/1.pdf',
      LastModified: 2020-11-12T04:11:23.000Z,
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD'
    }
  ],
  Name: 'test-bucket-11-11-2020-object-lock',
  Prefix: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/',
  MaxKeys: 1000,
  CommonPrefixes: [],
  KeyCount: 5
}

