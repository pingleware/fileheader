# fileheader README

fileheader will automatically place a header comment in your file

## Features

Places the following header information in your file,

```
/**
 * File: index.php
 * Created: 11/18/2023, 01:20:05 PM EST
 * Last Modified: <?php echo date("Y-m-d", filemtime(__FILE__)); ?>
 * License: CC-BY-4.0
 * File Header Created By: PINGLEWARE: Add File Header from PRESSPAGE ENTERTAINMENT INC dba PINGLEWARE <maintainers@pingleware.work>
 */

```

## Requirements

You file should support the /* COMMENT */ theme

## Extension Settings

None

## Known Issues

None

## Release Notes

The fileheader places the following header in your text-based source files,

```
/**
 * File: index.php
 * Created: 11/18/2023, 01:20:05 PM EST
 * Last Modified: <?php echo date("Y-m-d", filemtime(__FILE__)); ?>
 * License: CC-BY-4.0
 * File Header Created By: PINGLEWARE: Add File Header from PRESSPAGE ENTERTAINMENT INC dba PINGLEWARE <maintainers@pingleware.work>
 */

```

### 1.0.0

Initial release of fileheader
