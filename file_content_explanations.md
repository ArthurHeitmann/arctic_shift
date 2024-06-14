
All data is retrieved through the official reddit API. Content from private or
quarantined subreddits is not included. One JSON object represents
one post or comment. The objects are modified slightly, as described below. Some
modifications are only introduced in later dumps. This does not apply to the
previous pushshift dumps (2023-03 and earlier).

Auto generated JSON schemas are available [here](./schemas).

## 2023-04+

- All objects are sorted by `created_utc`, `id` (secondary) in ascending order
- Text is encoded as UTF-8
- JSON keys are sorted
- The `body_html` field is removed
- `retrieved_on` is added, to indicate when the object was retrieved (UTC timestamp in seconds)

## 2023-11+

All content has been retrieved a second time, with a 36 hour delay. The original and
the new content are merged, in the following way:

- The following fields are updated to the new value:  
  `archived`, `controversiality`, `downs`, `hide_score`, `locked`,  
  `num_comments`, `num_crossposts`, `over_18`, `score`, `score_hidden`,  
  `spoiler`, `stickied`, `ups`, `upvote_ratio`
- Any new meta data is stored in the optional `_meta` field
- The timestamp of the 2nd retrieval is stored in `_meta.retrieved_2nd_on`
- If a thing has been deleted in the updated version, `_meta.was_deleted_later` is set to `true`
- If a thing was initially deleted, but is now available, `_meta.was_initially_deleted` is set to 
  `true` and the `body` or `selftext` field is restored
- In both of the above cases, `_meta.removal_type` contains more information about the removal reason
- If the text content of a thing has changed, `_meta.is_edited` is set to `true`
- If a thing was initially unavailable, but now is, `_meta.note` is set to `"initially_unavailable"`

## 2024-04+

Archives will now only be released as .zst files, now that I'm changing by database and API architecture,
and am no longer using .zst_blocks files.
