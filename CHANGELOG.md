# Change Log

All notable changes to the "copy-relative-path-import" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

## [0.0.6]

### Added

- Drop .d.ts extension from a .d.ts file

### Fixed

- Fixed extension imports from multipart extensions. Previously importing from `something.test.js` would have rewritten the import as `somethingtest`.
- Fixed incorrect version number in 0.0.5 section CHANGELOG.md

## [0.0.5]

### Added

- Copies relative path of active file when nothing is selected

## [0.0.4]

### Changed

- Version bump, bad publish, trying again

## [0.0.3]

### Changed

- Fixed deps, version bump

## [0.0.2]

### Changed

- Readme update

## [0.0.1]

### Added

- Added command which copies the selected text and relative path of the active file, and then creates a JS import declaration from those values.
- If you execute the command twice in a row, the 2nd time will copy the relative path of the active file instead of the import.