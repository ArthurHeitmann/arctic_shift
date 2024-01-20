# Auto generated JSON schemas

Here are auto generated JSON schemas based on all dumps (from pushshift and after).
Schemas are generated for individual dumps and merged by year + all.

## Original file schemas

Schemas for the original dumps are under RX/20XX/...

There is a TypeScript interface for each dump. For optional fields, a comment like `crosspost_parent?: string, // 628166/16445391 (3.82%)` is added. The numbers are the absolute (relative) number of objects that have this field, relative to the parent object. When a value has multiple types, they are sorted by usage. The first type is the most common one.

In addition to the TypeScript interfaces, next to it there is a JSON file with more detailed usage statistics. It doesn't follow any standard. It has information like the min/max int/float values, min/max/average string/array length, number of unique values, relative usage of each data type, etc.

## Merged file schemas

The original schemas are merged once by year and once for all dumps. Yearly schemas are under RX/20XX.ts. The global schemas are in RX.ts. Merged schemas do not contain usage statistics.
