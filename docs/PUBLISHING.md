# Publishing Guide

This document outlines the process for publishing the iOS26 React Component Library to npm.

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com)
2. **Access**: Ensure you have access to publish to `@ios26/ui` scope
3. **Authentication**: Login via `npm login`

## Versioning

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (x.0.0): Breaking changes
- **MINOR** (0.x.0): New features (backward compatible)
- **PATCH** (0.0.x): Bug fixes

### Version Bump Process

1. Update version in `packages/ui/package.json`
2. Update CHANGELOG.md (if maintained)
3. Commit with message: `chore: bump version to x.x.x`
4. Create git tag: `git tag vx.x.x`
5. Push tag: `git push origin vx.x.x`

## Pre-Publishing Checklist

Before publishing, ensure:

- [ ] All tests pass
- [ ] Build succeeds: `pnpm build`
- [ ] TypeScript compiles: `pnpm typecheck`
- [ ] Storybook builds: `pnpm build:storybook`
- [ ] Version updated in `package.json`
- [ ] CHANGELOG updated (if maintained)
- [ ] README is up to date
- [ ] `.npmignore` is configured correctly
- [ ] `package.json` fields are correct:
  - `name`: `@ios26/ui`
  - `version`: Updated
  - `description`: Accurate
  - `keywords`: Relevant
  - `author`: Correct
  - `license`: MIT
  - `repository`: Correct URL
  - `files`: Includes only necessary files

## Build Process

### Local Build

```bash
# Clean previous builds
pnpm --filter ui clean

# Build package
pnpm --filter ui build

# Verify build output
ls packages/ui/dist
```

### Build Output

The build should produce:

- `dist/index.js` - CommonJS entry
- `dist/index.mjs` - ESM entry
- `dist/index.d.ts` - TypeScript definitions
- `dist/styles.css` - Compiled CSS
- `dist/**/*.d.ts` - Type definitions for all files

## Publishing

### Manual Publishing

1. **Navigate to package directory**:

```bash
cd packages/ui
```

2. **Verify package contents**:

```bash
npm pack --dry-run
```

This shows what will be published without actually publishing.

3. **Publish**:

```bash
# For public release
npm publish --access public

# For scoped package (if not configured)
npm publish --access public
```

### Publishing Beta/Alpha Versions

For pre-release versions:

```bash
# Beta
npm publish --tag beta

# Alpha
npm publish --tag alpha
```

Install with:

```bash
npm install @ios26/ui@beta
npm install @ios26/ui@alpha
```

## Automated Publishing (CI/CD)

### GitHub Actions Workflow

The project includes a GitHub Actions workflow (`.github/workflows/publish.yml`) that:

1. Triggers on version tags (`v*`)
2. Builds the package
3. Publishes to npm
4. Deploys Storybook (if configured)

### Setting Up CI/CD

1. **Add npm token to GitHub Secrets**:

   - Go to repository Settings → Secrets → Actions
   - Add secret: `NPM_TOKEN`
   - Value: npm access token (create at npmjs.com)

2. **Create version tag**:

```bash
git tag v1.0.0
git push origin v1.0.0
```

3. **Workflow runs automatically**

## Post-Publishing

After publishing:

1. **Verify on npm**: Check [npmjs.com/package/@ios26/ui](https://www.npmjs.com/package/@ios26/ui)
2. **Test installation**:

```bash
npm install @ios26/ui@latest
```

3. **Update documentation**: If needed, update README with new version
4. **Announce**: Share release notes (GitHub releases, Twitter, etc.)

## Troubleshooting

### Authentication Errors

```bash
# Re-login
npm login

# Verify authentication
npm whoami
```

### Permission Errors

- Ensure you have publish access to `@ios26` scope
- Check npm organization settings
- Verify package name matches scope

### Build Errors

- Check TypeScript errors: `pnpm typecheck`
- Verify all dependencies are installed
- Check Tailwind CSS compilation

### Publishing Errors

- Verify package name is available/you have access
- Check version hasn't been published already
- Ensure `.npmignore` isn't excluding necessary files

## Package Configuration

### package.json Fields

```json
{
  "name": "@ios26/ui",
  "version": "0.1.0",
  "description": "iOS 26 design system components",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/styles.css"
  },
  "files": ["dist", "src", "styles"],
  "sideEffects": false
}
```

### .npmignore

Excludes from package:

- Source test files
- Storybook files
- Config files
- Development dependencies
- Build artifacts (except dist)

## Unpublishing

If you need to unpublish (use carefully):

```bash
# Unpublish specific version
npm unpublish @ios26/ui@1.0.0

# Unpublish entire package (within 72 hours)
npm unpublish @ios26/ui --force
```

**Note**: Unpublishing affects users. Prefer deprecating instead:

```bash
npm deprecate @ios26/ui@1.0.0 "Use version 1.0.1 instead"
```

## Best Practices

1. **Test before publishing**: Always test the built package locally
2. **Version carefully**: Don't break semver
3. **Document changes**: Update CHANGELOG or release notes
4. **Tag releases**: Create git tags for versions
5. **Monitor**: Watch for issues after publishing
6. **Communicate**: Share breaking changes clearly

## Resources

- [npm Documentation](https://docs.npmjs.com)
- [Semantic Versioning](https://semver.org)
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)

