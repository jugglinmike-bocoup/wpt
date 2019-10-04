// META: script=support.js

let key = "key";

indexeddb_test(
    function upgrade(t, db) {
        db.createObjectStore('store');
    },
    function success(t, db) {
      blobAContent = "Blob A content";
      blobBContent = "Blob B content";
      var blobA = new Blob([blobAContent], {"type" : "text/plain"});
      var blobB = new Blob([blobBContent], {"type" : "text/plain"});
      value = { a0: blobA, a1: blobA, b0: blobB };

      var tx = db.transaction('store', 'readwrite');
      var store = tx.objectStore('store');

      store.put(value, key);
      var request = store.get(key);

      request.onsuccess = t.step_func(function() {
        record = request.result;

        record.a0.text().then(text => { assert_equals(text, blobAContent); },
          () => { assert_unreached(); });

        record.a1.text().then(text => { assert_equals(text, blobAContent); },
          () => { assert_unreached(); });

        record.b0.text().then(text => { assert_equals(text, blobBContent); },
          () => { assert_unreached(); });

        t.done();
      });
    },
    "Blobs can be read back before their records are committed.");