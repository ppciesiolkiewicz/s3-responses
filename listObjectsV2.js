// The drawback of this method is that it doesn't return object version
// It lists all the latest object versions (ls)

// s3.listObjectsV2({
//   Prefix: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001',
// })
// response:
{
  IsTruncated: false,
  Contents: [
    {
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
      LastModified: 2020-11-19T21:41:52.000Z,
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'STANDARD'
    },
    {
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/2.pdf',
      LastModified: 2020-11-12T01:55:27.000Z,
      ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
      Size: 347091,
      StorageClass: 'GLACIER'
    },
    {
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/3.pdf',
      LastModified: 2020-11-12T01:55:22.000Z,
      ETag: '"72ef4d54ea3fdcb4211bf1f47e091b4f"',
      Size: 73093,
      StorageClass: 'GLACIER'
    },
    {
      Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/SoilSurvey/1.pdf',
      LastModified: 2020-11-19T21:52:00.000Z,
      ETag: '"f412aa55ea970929707dfe4188084cbb"',
      Size: 158194,
      StorageClass: 'GLACIER'
    }
  ],
  Name: 'test-bucket-11-11-2020-object-lock',
  Prefix: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/',
  MaxKeys: 1000,
  CommonPrefixes: [],
  KeyCount: 4
}