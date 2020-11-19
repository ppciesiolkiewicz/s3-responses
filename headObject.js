// The drawback of this method is that it requires one call for 1 object.
// It is the only

// s3.headObject({
//    Key: 'applications/10000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
//    VersionId: 'sDkhHTA3kWSSIgGMWAO8o_W8BoAC8YrW', // can be undefined
// })

{
  AcceptRanges: 'bytes',
  LastModified: 2020-11-16T23:21:52.000Z,
  ContentLength: 347091,
  ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
  VersionId: 'sDkhHTA3kWSSIgGMWAO8o_W8BoAC8YrW',
  ContentType: 'application/pdf',
  IsLocked: 'COMPLIANCE',
  Restore: 'ongoing-request="true";expiry-date="2021-11-16T23:21:52.000Z"'
  Metadata: {
    'application-id': '10000000-0000-0000-0000-000000000000',
    'user-id': '00000000-0000-0000-0000-000000000001',
    'document-type-key': 'LandDeed'
  }
}