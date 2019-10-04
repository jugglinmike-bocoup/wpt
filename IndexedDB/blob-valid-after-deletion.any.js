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
    value = null;

    trans = db.transaction('store');
    store = trans.objectStore('store');
    request = store.get(key);

    request.onsuccess = t.step_func(function() {
      const record = request.result;

      trans.oncomplete = t.step_func(function() {
        trans = db.transaction('store', 'readwrite');
        store = trans.objectStore('store');
        request = store.delete(key);

        trans.oncomplete = t.step_func(function() {
          record.a0.text().then(text => { assert_equals(text, blobAContent); },
            () => { assert_unreached(); });

          record.a1.text().then(text => { assert_equals(text, blobAContent); },
            () => { assert_unreached(); });

          record.b0.text().then(text => { assert_equals(text, blobBContent); },
            () => { assert_unreached(); });

          t.done();
        });
      });
    });
  },
  "Blobs stay alive after their records are deleted.");