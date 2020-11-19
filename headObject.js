// The drawback of this method is that it requires one call for 1 object.
// It is the only

// s3.headObject({
//    Key: 'applications/99000000-0000-0000-0000-000000000000/00000000-0000-0000-0000-000000000001/LandDeed/1.pdf',
//    VersionId: 'sDkhHTA3kWSSIgGMWAO8o_W8BoAC8YrW', // can be undefined
// })
// the example below uses 3 headObject calls to retrieve 3 objects

[
  {
    AcceptRanges: 'bytes',
    LastModified: 2020-11-19T21:41:52.000Z,
    ContentLength: 158194,
    ETag: '"f412aa55ea970929707dfe4188084cbb"',
    VersionId: 'Cgu5gaQWqow0JinPwDGkt2SeXOmEXcFw',
    ContentType: 'application/pdf',
    Metadata: {
      'application-id': '99000000-0000-0000-0000-000000000000',
      'user-id': '00000000-0000-0000-0000-000000000001',
      'document-type-key': 'LandDeed',
      'content-md5': '9BKqVeqXCSlwff5BiAhMuw=='
    },
    ObjectLockMode: 'GOVERNANCE',
    ObjectLockRetainUntilDate: 2020-11-23T13:00:00.000Z
  },
  {
    AcceptRanges: 'bytes',
    Restore: 'ongoing-request="false", expiry-date="Sat, 21 Nov 2020 00:00:00 GMT"',
    LastModified: 2020-11-12T01:55:27.000Z,
    ContentLength: 347091,
    ETag: '"f9e6e4a2f047b56edbf38210729b3110"',
    VersionId: 'woWEWXjO2ABXJS20Np4FzqME4axC3cS_',
    ContentType: 'application/pdf',
    Metadata: {},
    StorageClass: 'GLACIER'
  },
  {
    AcceptRanges: 'bytes',
    Restore: 'ongoing-request="false", expiry-date="Sat, 21 Nov 2020 00:00:00 GMT"',
    LastModified: 2020-11-12T01:55:22.000Z,
    ContentLength: 73093,
    ETag: '"72ef4d54ea3fdcb4211bf1f47e091b4f"',
    VersionId: 'OcK0RlxahVZvNWZQ_N_X725mk4.og6_P',
    ContentType: 'application/pdf',
    Metadata: {},
    StorageClass: 'GLACIER',
    ObjectLockMode: 'GOVERNANCE',
    ObjectLockRetainUntilDate: 2020-11-25T13:00:00.000Z
  },
  {
    AcceptRanges: 'bytes',
    LastModified: 2020-11-19T21:52:00.000Z,
    ContentLength: 158194,
    ETag: '"f412aa55ea970929707dfe4188084cbb"',
    VersionId: 'aDyJNlwT56FVQ0Ic6bvQOrfeZKRUXNm8',
    ContentType: 'application/pdf',
    Metadata: {
      'application-id': '99000000-0000-0000-0000-000000000000',
      'user-id': '00000000-0000-0000-0000-000000000001',
      'document-type-key': 'SoilSurvey',
      'content-md5': '9BKqVeqXCSlwff5BiAhMuw=='
    },
    StorageClass: 'GLACIER'
  }
]
