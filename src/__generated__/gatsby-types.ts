/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'auto'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type GatsbyImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type GatsbyImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulAsset = ContentfulReference & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale';

type ContentfulImageCropFocus =
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'right'
  | 'left'
  | 'face'
  | 'faces'
  | 'center';

type ContentfulAuthor = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly nickName: Maybe<Scalars['String']>;
  readonly qiita: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly github: Maybe<Scalars['String']>;
  readonly avatarImage: Maybe<ContentfulAsset>;
  readonly description: Maybe<contentfulAuthorDescriptionTextNode>;
  readonly programmingLanguages: Maybe<contentfulAuthorProgrammingLanguagesTextNode>;
  readonly myHobbies: Maybe<contentfulAuthorMyHobbiesTextNode>;
  readonly myWorks: Maybe<contentfulAuthorMyWorksTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulAuthorSys>;
  /** Returns all children nodes filtered by type contentfulAuthorProgrammingLanguagesTextNode */
  readonly childrenContentfulAuthorProgrammingLanguagesTextNode: Maybe<ReadonlyArray<Maybe<contentfulAuthorProgrammingLanguagesTextNode>>>;
  /** Returns the first child node of type contentfulAuthorProgrammingLanguagesTextNode or null if there are no children of given type on this node */
  readonly childContentfulAuthorProgrammingLanguagesTextNode: Maybe<contentfulAuthorProgrammingLanguagesTextNode>;
  /** Returns all children nodes filtered by type contentfulAuthorMyWorksTextNode */
  readonly childrenContentfulAuthorMyWorksTextNode: Maybe<ReadonlyArray<Maybe<contentfulAuthorMyWorksTextNode>>>;
  /** Returns the first child node of type contentfulAuthorMyWorksTextNode or null if there are no children of given type on this node */
  readonly childContentfulAuthorMyWorksTextNode: Maybe<contentfulAuthorMyWorksTextNode>;
  /** Returns all children nodes filtered by type contentfulAuthorMyHobbiesTextNode */
  readonly childrenContentfulAuthorMyHobbiesTextNode: Maybe<ReadonlyArray<Maybe<contentfulAuthorMyHobbiesTextNode>>>;
  /** Returns the first child node of type contentfulAuthorMyHobbiesTextNode or null if there are no children of given type on this node */
  readonly childContentfulAuthorMyHobbiesTextNode: Maybe<contentfulAuthorMyHobbiesTextNode>;
  /** Returns all children nodes filtered by type contentfulAuthorDescriptionTextNode */
  readonly childrenContentfulAuthorDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulAuthorDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulAuthorDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulAuthorDescriptionTextNode: Maybe<contentfulAuthorDescriptionTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAuthor_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAuthor_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulAuthorSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulAuthorSysContentType>;
};

type ContentfulAuthorSysContentType = {
  readonly sys: Maybe<ContentfulAuthorSysContentTypeSys>;
};

type ContentfulAuthorSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulMyPost = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly publishDate: Maybe<Scalars['Date']>;
  readonly body: Maybe<contentfulMyPostBodyTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulMyPostSys>;
  /** Returns all children nodes filtered by type contentfulMyPostBodyTextNode */
  readonly childrenContentfulMyPostBodyTextNode: Maybe<ReadonlyArray<Maybe<contentfulMyPostBodyTextNode>>>;
  /** Returns the first child node of type contentfulMyPostBodyTextNode or null if there are no children of given type on this node */
  readonly childContentfulMyPostBodyTextNode: Maybe<contentfulMyPostBodyTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulMyPost_publishDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulMyPost_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulMyPost_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulMyPostSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulMyPostSysContentType>;
};

type ContentfulMyPostSysContentType = {
  readonly sys: Maybe<ContentfulMyPostSysContentTypeSys>;
};

type ContentfulMyPostSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulMyWork = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly repositoryUrl: Maybe<Scalars['String']>;
  readonly description: Maybe<contentfulMyWorkDescriptionTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulMyWorkSys>;
  /** Returns all children nodes filtered by type contentfulMyWorkDescriptionTextNode */
  readonly childrenContentfulMyWorkDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulMyWorkDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulMyWorkDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulMyWorkDescriptionTextNode: Maybe<contentfulMyWorkDescriptionTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulMyWork_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulMyWork_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulMyWorkSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulMyWorkSysContentType>;
};

type ContentfulMyWorkSysContentType = {
  readonly sys: Maybe<ContentfulMyWorkSysContentTypeSys>;
};

type ContentfulMyWorkSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type contentfulMyWorkDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulMyWorkDescriptionTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulMyWorkDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulMyPostBodyTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulMyPostBodyTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulMyPostBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulAuthorProgrammingLanguagesTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly programmingLanguages: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulAuthorProgrammingLanguagesTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulAuthorProgrammingLanguagesTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulAuthorMyWorksTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly myWorks: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulAuthorMyWorksTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulAuthorMyWorksTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulAuthorMyHobbiesTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly myHobbies: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulAuthorMyHobbiesTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulAuthorMyHobbiesTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulAuthorDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulAuthorDescriptionTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulAuthorDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulAuthor: Maybe<ContentfulAuthor>;
  readonly allContentfulAuthor: ContentfulAuthorConnection;
  readonly contentfulMyPost: Maybe<ContentfulMyPost>;
  readonly allContentfulMyPost: ContentfulMyPostConnection;
  readonly contentfulMyWork: Maybe<ContentfulMyWork>;
  readonly allContentfulMyWork: ContentfulMyWorkConnection;
  readonly contentfulMyWorkDescriptionTextNode: Maybe<contentfulMyWorkDescriptionTextNode>;
  readonly allContentfulMyWorkDescriptionTextNode: contentfulMyWorkDescriptionTextNodeConnection;
  readonly contentfulMyPostBodyTextNode: Maybe<contentfulMyPostBodyTextNode>;
  readonly allContentfulMyPostBodyTextNode: contentfulMyPostBodyTextNodeConnection;
  readonly contentfulAuthorProgrammingLanguagesTextNode: Maybe<contentfulAuthorProgrammingLanguagesTextNode>;
  readonly allContentfulAuthorProgrammingLanguagesTextNode: contentfulAuthorProgrammingLanguagesTextNodeConnection;
  readonly contentfulAuthorMyWorksTextNode: Maybe<contentfulAuthorMyWorksTextNode>;
  readonly allContentfulAuthorMyWorksTextNode: contentfulAuthorMyWorksTextNodeConnection;
  readonly contentfulAuthorMyHobbiesTextNode: Maybe<contentfulAuthorMyHobbiesTextNode>;
  readonly allContentfulAuthorMyHobbiesTextNode: contentfulAuthorMyHobbiesTextNodeConnection;
  readonly contentfulAuthorDescriptionTextNode: Maybe<contentfulAuthorDescriptionTextNode>;
  readonly allContentfulAuthorDescriptionTextNode: contentfulAuthorDescriptionTextNodeConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  jsxRuntime: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAuthorArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  nickName: Maybe<StringQueryOperatorInput>;
  qiita: Maybe<StringQueryOperatorInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  github: Maybe<StringQueryOperatorInput>;
  avatarImage: Maybe<ContentfulAssetFilterInput>;
  description: Maybe<contentfulAuthorDescriptionTextNodeFilterInput>;
  programmingLanguages: Maybe<contentfulAuthorProgrammingLanguagesTextNodeFilterInput>;
  myHobbies: Maybe<contentfulAuthorMyHobbiesTextNodeFilterInput>;
  myWorks: Maybe<contentfulAuthorMyWorksTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulAuthorSysFilterInput>;
  childrenContentfulAuthorProgrammingLanguagesTextNode: Maybe<contentfulAuthorProgrammingLanguagesTextNodeFilterListInput>;
  childContentfulAuthorProgrammingLanguagesTextNode: Maybe<contentfulAuthorProgrammingLanguagesTextNodeFilterInput>;
  childrenContentfulAuthorMyWorksTextNode: Maybe<contentfulAuthorMyWorksTextNodeFilterListInput>;
  childContentfulAuthorMyWorksTextNode: Maybe<contentfulAuthorMyWorksTextNodeFilterInput>;
  childrenContentfulAuthorMyHobbiesTextNode: Maybe<contentfulAuthorMyHobbiesTextNodeFilterListInput>;
  childContentfulAuthorMyHobbiesTextNode: Maybe<contentfulAuthorMyHobbiesTextNodeFilterInput>;
  childrenContentfulAuthorDescriptionTextNode: Maybe<contentfulAuthorDescriptionTextNodeFilterListInput>;
  childContentfulAuthorDescriptionTextNode: Maybe<contentfulAuthorDescriptionTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAuthorArgs = {
  filter: Maybe<ContentfulAuthorFilterInput>;
  sort: Maybe<ContentfulAuthorSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulMyPostArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  publishDate: Maybe<DateQueryOperatorInput>;
  body: Maybe<contentfulMyPostBodyTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulMyPostSysFilterInput>;
  childrenContentfulMyPostBodyTextNode: Maybe<contentfulMyPostBodyTextNodeFilterListInput>;
  childContentfulMyPostBodyTextNode: Maybe<contentfulMyPostBodyTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulMyPostArgs = {
  filter: Maybe<ContentfulMyPostFilterInput>;
  sort: Maybe<ContentfulMyPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulMyWorkArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  repositoryUrl: Maybe<StringQueryOperatorInput>;
  description: Maybe<contentfulMyWorkDescriptionTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulMyWorkSysFilterInput>;
  childrenContentfulMyWorkDescriptionTextNode: Maybe<contentfulMyWorkDescriptionTextNodeFilterListInput>;
  childContentfulMyWorkDescriptionTextNode: Maybe<contentfulMyWorkDescriptionTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulMyWorkArgs = {
  filter: Maybe<ContentfulMyWorkFilterInput>;
  sort: Maybe<ContentfulMyWorkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulMyWorkDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulMyWorkDescriptionTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulMyWorkDescriptionTextNodeArgs = {
  filter: Maybe<contentfulMyWorkDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulMyWorkDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulMyPostBodyTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulMyPostBodyTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulMyPostBodyTextNodeArgs = {
  filter: Maybe<contentfulMyPostBodyTextNodeFilterInput>;
  sort: Maybe<contentfulMyPostBodyTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAuthorProgrammingLanguagesTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  programmingLanguages: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulAuthorProgrammingLanguagesTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulAuthorProgrammingLanguagesTextNodeArgs = {
  filter: Maybe<contentfulAuthorProgrammingLanguagesTextNodeFilterInput>;
  sort: Maybe<contentfulAuthorProgrammingLanguagesTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAuthorMyWorksTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  myWorks: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulAuthorMyWorksTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulAuthorMyWorksTextNodeArgs = {
  filter: Maybe<contentfulAuthorMyWorksTextNodeFilterInput>;
  sort: Maybe<contentfulAuthorMyWorksTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAuthorMyHobbiesTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  myHobbies: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulAuthorMyHobbiesTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulAuthorMyHobbiesTextNodeArgs = {
  filter: Maybe<contentfulAuthorMyHobbiesTextNodeFilterInput>;
  sort: Maybe<contentfulAuthorMyHobbiesTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAuthorDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulAuthorDescriptionTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulAuthorDescriptionTextNodeArgs = {
  filter: Maybe<contentfulAuthorDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulAuthorDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'pathPrefix'
  | 'polyfill'
  | 'jsxRuntime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly jsxRuntime: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulEntryGroupConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file.url'
  | 'file.details.size'
  | 'file.details.image.width'
  | 'file.details.image.height'
  | 'file.fileName'
  | 'file.contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys.type'
  | 'sys.revision'
  | 'gatsbyImageData'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulAssetGroupConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulAuthorDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulAuthorDescriptionTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulAuthorDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulAuthorProgrammingLanguagesTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly programmingLanguages: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulAuthorProgrammingLanguagesTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulAuthorProgrammingLanguagesTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type contentfulAuthorMyHobbiesTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly myHobbies: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulAuthorMyHobbiesTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulAuthorMyHobbiesTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type contentfulAuthorMyWorksTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly myWorks: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulAuthorMyWorksTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulAuthorMyWorksTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulAuthorSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
};

type ContentfulAuthorSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

type ContentfulAuthorSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulAuthorProgrammingLanguagesTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulAuthorProgrammingLanguagesTextNodeFilterInput>;
};

type contentfulAuthorMyWorksTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulAuthorMyWorksTextNodeFilterInput>;
};

type contentfulAuthorMyHobbiesTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulAuthorMyHobbiesTextNodeFilterInput>;
};

type contentfulAuthorDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulAuthorDescriptionTextNodeFilterInput>;
};

type ContentfulAuthorConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAuthorEdge>;
  readonly nodes: ReadonlyArray<ContentfulAuthor>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAuthorGroupConnection>;
};


type ContentfulAuthorConnection_distinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_maxArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_minArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_sumArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

type ContentfulAuthorEdge = {
  readonly next: Maybe<ContentfulAuthor>;
  readonly node: ContentfulAuthor;
  readonly previous: Maybe<ContentfulAuthor>;
};

type ContentfulAuthorFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'nickName'
  | 'qiita'
  | 'twitter'
  | 'github'
  | 'avatarImage.contentful_id'
  | 'avatarImage.id'
  | 'avatarImage.spaceId'
  | 'avatarImage.createdAt'
  | 'avatarImage.updatedAt'
  | 'avatarImage.file.url'
  | 'avatarImage.file.details.size'
  | 'avatarImage.file.fileName'
  | 'avatarImage.file.contentType'
  | 'avatarImage.title'
  | 'avatarImage.description'
  | 'avatarImage.node_locale'
  | 'avatarImage.sys.type'
  | 'avatarImage.sys.revision'
  | 'avatarImage.gatsbyImageData'
  | 'avatarImage.parent.id'
  | 'avatarImage.parent.parent.id'
  | 'avatarImage.parent.parent.children'
  | 'avatarImage.parent.children'
  | 'avatarImage.parent.children.id'
  | 'avatarImage.parent.children.children'
  | 'avatarImage.parent.internal.content'
  | 'avatarImage.parent.internal.contentDigest'
  | 'avatarImage.parent.internal.description'
  | 'avatarImage.parent.internal.fieldOwners'
  | 'avatarImage.parent.internal.ignoreType'
  | 'avatarImage.parent.internal.mediaType'
  | 'avatarImage.parent.internal.owner'
  | 'avatarImage.parent.internal.type'
  | 'avatarImage.children'
  | 'avatarImage.children.id'
  | 'avatarImage.children.parent.id'
  | 'avatarImage.children.parent.children'
  | 'avatarImage.children.children'
  | 'avatarImage.children.children.id'
  | 'avatarImage.children.children.children'
  | 'avatarImage.children.internal.content'
  | 'avatarImage.children.internal.contentDigest'
  | 'avatarImage.children.internal.description'
  | 'avatarImage.children.internal.fieldOwners'
  | 'avatarImage.children.internal.ignoreType'
  | 'avatarImage.children.internal.mediaType'
  | 'avatarImage.children.internal.owner'
  | 'avatarImage.children.internal.type'
  | 'avatarImage.internal.content'
  | 'avatarImage.internal.contentDigest'
  | 'avatarImage.internal.description'
  | 'avatarImage.internal.fieldOwners'
  | 'avatarImage.internal.ignoreType'
  | 'avatarImage.internal.mediaType'
  | 'avatarImage.internal.owner'
  | 'avatarImage.internal.type'
  | 'description.id'
  | 'description.parent.id'
  | 'description.parent.parent.id'
  | 'description.parent.parent.children'
  | 'description.parent.children'
  | 'description.parent.children.id'
  | 'description.parent.children.children'
  | 'description.parent.internal.content'
  | 'description.parent.internal.contentDigest'
  | 'description.parent.internal.description'
  | 'description.parent.internal.fieldOwners'
  | 'description.parent.internal.ignoreType'
  | 'description.parent.internal.mediaType'
  | 'description.parent.internal.owner'
  | 'description.parent.internal.type'
  | 'description.children'
  | 'description.children.id'
  | 'description.children.parent.id'
  | 'description.children.parent.children'
  | 'description.children.children'
  | 'description.children.children.id'
  | 'description.children.children.children'
  | 'description.children.internal.content'
  | 'description.children.internal.contentDigest'
  | 'description.children.internal.description'
  | 'description.children.internal.fieldOwners'
  | 'description.children.internal.ignoreType'
  | 'description.children.internal.mediaType'
  | 'description.children.internal.owner'
  | 'description.children.internal.type'
  | 'description.internal.content'
  | 'description.internal.contentDigest'
  | 'description.internal.description'
  | 'description.internal.fieldOwners'
  | 'description.internal.ignoreType'
  | 'description.internal.mediaType'
  | 'description.internal.owner'
  | 'description.internal.type'
  | 'description.description'
  | 'description.sys.type'
  | 'description.childrenMarkdownRemark'
  | 'description.childrenMarkdownRemark.id'
  | 'description.childrenMarkdownRemark.frontmatter.title'
  | 'description.childrenMarkdownRemark.excerpt'
  | 'description.childrenMarkdownRemark.rawMarkdownBody'
  | 'description.childrenMarkdownRemark.html'
  | 'description.childrenMarkdownRemark.htmlAst'
  | 'description.childrenMarkdownRemark.excerptAst'
  | 'description.childrenMarkdownRemark.headings'
  | 'description.childrenMarkdownRemark.headings.id'
  | 'description.childrenMarkdownRemark.headings.value'
  | 'description.childrenMarkdownRemark.headings.depth'
  | 'description.childrenMarkdownRemark.timeToRead'
  | 'description.childrenMarkdownRemark.tableOfContents'
  | 'description.childrenMarkdownRemark.wordCount.paragraphs'
  | 'description.childrenMarkdownRemark.wordCount.sentences'
  | 'description.childrenMarkdownRemark.wordCount.words'
  | 'description.childrenMarkdownRemark.parent.id'
  | 'description.childrenMarkdownRemark.parent.children'
  | 'description.childrenMarkdownRemark.children'
  | 'description.childrenMarkdownRemark.children.id'
  | 'description.childrenMarkdownRemark.children.children'
  | 'description.childrenMarkdownRemark.internal.content'
  | 'description.childrenMarkdownRemark.internal.contentDigest'
  | 'description.childrenMarkdownRemark.internal.description'
  | 'description.childrenMarkdownRemark.internal.fieldOwners'
  | 'description.childrenMarkdownRemark.internal.ignoreType'
  | 'description.childrenMarkdownRemark.internal.mediaType'
  | 'description.childrenMarkdownRemark.internal.owner'
  | 'description.childrenMarkdownRemark.internal.type'
  | 'description.childMarkdownRemark.id'
  | 'description.childMarkdownRemark.frontmatter.title'
  | 'description.childMarkdownRemark.excerpt'
  | 'description.childMarkdownRemark.rawMarkdownBody'
  | 'description.childMarkdownRemark.html'
  | 'description.childMarkdownRemark.htmlAst'
  | 'description.childMarkdownRemark.excerptAst'
  | 'description.childMarkdownRemark.headings'
  | 'description.childMarkdownRemark.headings.id'
  | 'description.childMarkdownRemark.headings.value'
  | 'description.childMarkdownRemark.headings.depth'
  | 'description.childMarkdownRemark.timeToRead'
  | 'description.childMarkdownRemark.tableOfContents'
  | 'description.childMarkdownRemark.wordCount.paragraphs'
  | 'description.childMarkdownRemark.wordCount.sentences'
  | 'description.childMarkdownRemark.wordCount.words'
  | 'description.childMarkdownRemark.parent.id'
  | 'description.childMarkdownRemark.parent.children'
  | 'description.childMarkdownRemark.children'
  | 'description.childMarkdownRemark.children.id'
  | 'description.childMarkdownRemark.children.children'
  | 'description.childMarkdownRemark.internal.content'
  | 'description.childMarkdownRemark.internal.contentDigest'
  | 'description.childMarkdownRemark.internal.description'
  | 'description.childMarkdownRemark.internal.fieldOwners'
  | 'description.childMarkdownRemark.internal.ignoreType'
  | 'description.childMarkdownRemark.internal.mediaType'
  | 'description.childMarkdownRemark.internal.owner'
  | 'description.childMarkdownRemark.internal.type'
  | 'programmingLanguages.id'
  | 'programmingLanguages.parent.id'
  | 'programmingLanguages.parent.parent.id'
  | 'programmingLanguages.parent.parent.children'
  | 'programmingLanguages.parent.children'
  | 'programmingLanguages.parent.children.id'
  | 'programmingLanguages.parent.children.children'
  | 'programmingLanguages.parent.internal.content'
  | 'programmingLanguages.parent.internal.contentDigest'
  | 'programmingLanguages.parent.internal.description'
  | 'programmingLanguages.parent.internal.fieldOwners'
  | 'programmingLanguages.parent.internal.ignoreType'
  | 'programmingLanguages.parent.internal.mediaType'
  | 'programmingLanguages.parent.internal.owner'
  | 'programmingLanguages.parent.internal.type'
  | 'programmingLanguages.children'
  | 'programmingLanguages.children.id'
  | 'programmingLanguages.children.parent.id'
  | 'programmingLanguages.children.parent.children'
  | 'programmingLanguages.children.children'
  | 'programmingLanguages.children.children.id'
  | 'programmingLanguages.children.children.children'
  | 'programmingLanguages.children.internal.content'
  | 'programmingLanguages.children.internal.contentDigest'
  | 'programmingLanguages.children.internal.description'
  | 'programmingLanguages.children.internal.fieldOwners'
  | 'programmingLanguages.children.internal.ignoreType'
  | 'programmingLanguages.children.internal.mediaType'
  | 'programmingLanguages.children.internal.owner'
  | 'programmingLanguages.children.internal.type'
  | 'programmingLanguages.internal.content'
  | 'programmingLanguages.internal.contentDigest'
  | 'programmingLanguages.internal.description'
  | 'programmingLanguages.internal.fieldOwners'
  | 'programmingLanguages.internal.ignoreType'
  | 'programmingLanguages.internal.mediaType'
  | 'programmingLanguages.internal.owner'
  | 'programmingLanguages.internal.type'
  | 'programmingLanguages.programmingLanguages'
  | 'programmingLanguages.sys.type'
  | 'programmingLanguages.childrenMarkdownRemark'
  | 'programmingLanguages.childrenMarkdownRemark.id'
  | 'programmingLanguages.childrenMarkdownRemark.frontmatter.title'
  | 'programmingLanguages.childrenMarkdownRemark.excerpt'
  | 'programmingLanguages.childrenMarkdownRemark.rawMarkdownBody'
  | 'programmingLanguages.childrenMarkdownRemark.html'
  | 'programmingLanguages.childrenMarkdownRemark.htmlAst'
  | 'programmingLanguages.childrenMarkdownRemark.excerptAst'
  | 'programmingLanguages.childrenMarkdownRemark.headings'
  | 'programmingLanguages.childrenMarkdownRemark.headings.id'
  | 'programmingLanguages.childrenMarkdownRemark.headings.value'
  | 'programmingLanguages.childrenMarkdownRemark.headings.depth'
  | 'programmingLanguages.childrenMarkdownRemark.timeToRead'
  | 'programmingLanguages.childrenMarkdownRemark.tableOfContents'
  | 'programmingLanguages.childrenMarkdownRemark.wordCount.paragraphs'
  | 'programmingLanguages.childrenMarkdownRemark.wordCount.sentences'
  | 'programmingLanguages.childrenMarkdownRemark.wordCount.words'
  | 'programmingLanguages.childrenMarkdownRemark.parent.id'
  | 'programmingLanguages.childrenMarkdownRemark.parent.children'
  | 'programmingLanguages.childrenMarkdownRemark.children'
  | 'programmingLanguages.childrenMarkdownRemark.children.id'
  | 'programmingLanguages.childrenMarkdownRemark.children.children'
  | 'programmingLanguages.childrenMarkdownRemark.internal.content'
  | 'programmingLanguages.childrenMarkdownRemark.internal.contentDigest'
  | 'programmingLanguages.childrenMarkdownRemark.internal.description'
  | 'programmingLanguages.childrenMarkdownRemark.internal.fieldOwners'
  | 'programmingLanguages.childrenMarkdownRemark.internal.ignoreType'
  | 'programmingLanguages.childrenMarkdownRemark.internal.mediaType'
  | 'programmingLanguages.childrenMarkdownRemark.internal.owner'
  | 'programmingLanguages.childrenMarkdownRemark.internal.type'
  | 'programmingLanguages.childMarkdownRemark.id'
  | 'programmingLanguages.childMarkdownRemark.frontmatter.title'
  | 'programmingLanguages.childMarkdownRemark.excerpt'
  | 'programmingLanguages.childMarkdownRemark.rawMarkdownBody'
  | 'programmingLanguages.childMarkdownRemark.html'
  | 'programmingLanguages.childMarkdownRemark.htmlAst'
  | 'programmingLanguages.childMarkdownRemark.excerptAst'
  | 'programmingLanguages.childMarkdownRemark.headings'
  | 'programmingLanguages.childMarkdownRemark.headings.id'
  | 'programmingLanguages.childMarkdownRemark.headings.value'
  | 'programmingLanguages.childMarkdownRemark.headings.depth'
  | 'programmingLanguages.childMarkdownRemark.timeToRead'
  | 'programmingLanguages.childMarkdownRemark.tableOfContents'
  | 'programmingLanguages.childMarkdownRemark.wordCount.paragraphs'
  | 'programmingLanguages.childMarkdownRemark.wordCount.sentences'
  | 'programmingLanguages.childMarkdownRemark.wordCount.words'
  | 'programmingLanguages.childMarkdownRemark.parent.id'
  | 'programmingLanguages.childMarkdownRemark.parent.children'
  | 'programmingLanguages.childMarkdownRemark.children'
  | 'programmingLanguages.childMarkdownRemark.children.id'
  | 'programmingLanguages.childMarkdownRemark.children.children'
  | 'programmingLanguages.childMarkdownRemark.internal.content'
  | 'programmingLanguages.childMarkdownRemark.internal.contentDigest'
  | 'programmingLanguages.childMarkdownRemark.internal.description'
  | 'programmingLanguages.childMarkdownRemark.internal.fieldOwners'
  | 'programmingLanguages.childMarkdownRemark.internal.ignoreType'
  | 'programmingLanguages.childMarkdownRemark.internal.mediaType'
  | 'programmingLanguages.childMarkdownRemark.internal.owner'
  | 'programmingLanguages.childMarkdownRemark.internal.type'
  | 'myHobbies.id'
  | 'myHobbies.parent.id'
  | 'myHobbies.parent.parent.id'
  | 'myHobbies.parent.parent.children'
  | 'myHobbies.parent.children'
  | 'myHobbies.parent.children.id'
  | 'myHobbies.parent.children.children'
  | 'myHobbies.parent.internal.content'
  | 'myHobbies.parent.internal.contentDigest'
  | 'myHobbies.parent.internal.description'
  | 'myHobbies.parent.internal.fieldOwners'
  | 'myHobbies.parent.internal.ignoreType'
  | 'myHobbies.parent.internal.mediaType'
  | 'myHobbies.parent.internal.owner'
  | 'myHobbies.parent.internal.type'
  | 'myHobbies.children'
  | 'myHobbies.children.id'
  | 'myHobbies.children.parent.id'
  | 'myHobbies.children.parent.children'
  | 'myHobbies.children.children'
  | 'myHobbies.children.children.id'
  | 'myHobbies.children.children.children'
  | 'myHobbies.children.internal.content'
  | 'myHobbies.children.internal.contentDigest'
  | 'myHobbies.children.internal.description'
  | 'myHobbies.children.internal.fieldOwners'
  | 'myHobbies.children.internal.ignoreType'
  | 'myHobbies.children.internal.mediaType'
  | 'myHobbies.children.internal.owner'
  | 'myHobbies.children.internal.type'
  | 'myHobbies.internal.content'
  | 'myHobbies.internal.contentDigest'
  | 'myHobbies.internal.description'
  | 'myHobbies.internal.fieldOwners'
  | 'myHobbies.internal.ignoreType'
  | 'myHobbies.internal.mediaType'
  | 'myHobbies.internal.owner'
  | 'myHobbies.internal.type'
  | 'myHobbies.myHobbies'
  | 'myHobbies.sys.type'
  | 'myHobbies.childrenMarkdownRemark'
  | 'myHobbies.childrenMarkdownRemark.id'
  | 'myHobbies.childrenMarkdownRemark.frontmatter.title'
  | 'myHobbies.childrenMarkdownRemark.excerpt'
  | 'myHobbies.childrenMarkdownRemark.rawMarkdownBody'
  | 'myHobbies.childrenMarkdownRemark.html'
  | 'myHobbies.childrenMarkdownRemark.htmlAst'
  | 'myHobbies.childrenMarkdownRemark.excerptAst'
  | 'myHobbies.childrenMarkdownRemark.headings'
  | 'myHobbies.childrenMarkdownRemark.headings.id'
  | 'myHobbies.childrenMarkdownRemark.headings.value'
  | 'myHobbies.childrenMarkdownRemark.headings.depth'
  | 'myHobbies.childrenMarkdownRemark.timeToRead'
  | 'myHobbies.childrenMarkdownRemark.tableOfContents'
  | 'myHobbies.childrenMarkdownRemark.wordCount.paragraphs'
  | 'myHobbies.childrenMarkdownRemark.wordCount.sentences'
  | 'myHobbies.childrenMarkdownRemark.wordCount.words'
  | 'myHobbies.childrenMarkdownRemark.parent.id'
  | 'myHobbies.childrenMarkdownRemark.parent.children'
  | 'myHobbies.childrenMarkdownRemark.children'
  | 'myHobbies.childrenMarkdownRemark.children.id'
  | 'myHobbies.childrenMarkdownRemark.children.children'
  | 'myHobbies.childrenMarkdownRemark.internal.content'
  | 'myHobbies.childrenMarkdownRemark.internal.contentDigest'
  | 'myHobbies.childrenMarkdownRemark.internal.description'
  | 'myHobbies.childrenMarkdownRemark.internal.fieldOwners'
  | 'myHobbies.childrenMarkdownRemark.internal.ignoreType'
  | 'myHobbies.childrenMarkdownRemark.internal.mediaType'
  | 'myHobbies.childrenMarkdownRemark.internal.owner'
  | 'myHobbies.childrenMarkdownRemark.internal.type'
  | 'myHobbies.childMarkdownRemark.id'
  | 'myHobbies.childMarkdownRemark.frontmatter.title'
  | 'myHobbies.childMarkdownRemark.excerpt'
  | 'myHobbies.childMarkdownRemark.rawMarkdownBody'
  | 'myHobbies.childMarkdownRemark.html'
  | 'myHobbies.childMarkdownRemark.htmlAst'
  | 'myHobbies.childMarkdownRemark.excerptAst'
  | 'myHobbies.childMarkdownRemark.headings'
  | 'myHobbies.childMarkdownRemark.headings.id'
  | 'myHobbies.childMarkdownRemark.headings.value'
  | 'myHobbies.childMarkdownRemark.headings.depth'
  | 'myHobbies.childMarkdownRemark.timeToRead'
  | 'myHobbies.childMarkdownRemark.tableOfContents'
  | 'myHobbies.childMarkdownRemark.wordCount.paragraphs'
  | 'myHobbies.childMarkdownRemark.wordCount.sentences'
  | 'myHobbies.childMarkdownRemark.wordCount.words'
  | 'myHobbies.childMarkdownRemark.parent.id'
  | 'myHobbies.childMarkdownRemark.parent.children'
  | 'myHobbies.childMarkdownRemark.children'
  | 'myHobbies.childMarkdownRemark.children.id'
  | 'myHobbies.childMarkdownRemark.children.children'
  | 'myHobbies.childMarkdownRemark.internal.content'
  | 'myHobbies.childMarkdownRemark.internal.contentDigest'
  | 'myHobbies.childMarkdownRemark.internal.description'
  | 'myHobbies.childMarkdownRemark.internal.fieldOwners'
  | 'myHobbies.childMarkdownRemark.internal.ignoreType'
  | 'myHobbies.childMarkdownRemark.internal.mediaType'
  | 'myHobbies.childMarkdownRemark.internal.owner'
  | 'myHobbies.childMarkdownRemark.internal.type'
  | 'myWorks.id'
  | 'myWorks.parent.id'
  | 'myWorks.parent.parent.id'
  | 'myWorks.parent.parent.children'
  | 'myWorks.parent.children'
  | 'myWorks.parent.children.id'
  | 'myWorks.parent.children.children'
  | 'myWorks.parent.internal.content'
  | 'myWorks.parent.internal.contentDigest'
  | 'myWorks.parent.internal.description'
  | 'myWorks.parent.internal.fieldOwners'
  | 'myWorks.parent.internal.ignoreType'
  | 'myWorks.parent.internal.mediaType'
  | 'myWorks.parent.internal.owner'
  | 'myWorks.parent.internal.type'
  | 'myWorks.children'
  | 'myWorks.children.id'
  | 'myWorks.children.parent.id'
  | 'myWorks.children.parent.children'
  | 'myWorks.children.children'
  | 'myWorks.children.children.id'
  | 'myWorks.children.children.children'
  | 'myWorks.children.internal.content'
  | 'myWorks.children.internal.contentDigest'
  | 'myWorks.children.internal.description'
  | 'myWorks.children.internal.fieldOwners'
  | 'myWorks.children.internal.ignoreType'
  | 'myWorks.children.internal.mediaType'
  | 'myWorks.children.internal.owner'
  | 'myWorks.children.internal.type'
  | 'myWorks.internal.content'
  | 'myWorks.internal.contentDigest'
  | 'myWorks.internal.description'
  | 'myWorks.internal.fieldOwners'
  | 'myWorks.internal.ignoreType'
  | 'myWorks.internal.mediaType'
  | 'myWorks.internal.owner'
  | 'myWorks.internal.type'
  | 'myWorks.myWorks'
  | 'myWorks.sys.type'
  | 'myWorks.childrenMarkdownRemark'
  | 'myWorks.childrenMarkdownRemark.id'
  | 'myWorks.childrenMarkdownRemark.frontmatter.title'
  | 'myWorks.childrenMarkdownRemark.excerpt'
  | 'myWorks.childrenMarkdownRemark.rawMarkdownBody'
  | 'myWorks.childrenMarkdownRemark.html'
  | 'myWorks.childrenMarkdownRemark.htmlAst'
  | 'myWorks.childrenMarkdownRemark.excerptAst'
  | 'myWorks.childrenMarkdownRemark.headings'
  | 'myWorks.childrenMarkdownRemark.headings.id'
  | 'myWorks.childrenMarkdownRemark.headings.value'
  | 'myWorks.childrenMarkdownRemark.headings.depth'
  | 'myWorks.childrenMarkdownRemark.timeToRead'
  | 'myWorks.childrenMarkdownRemark.tableOfContents'
  | 'myWorks.childrenMarkdownRemark.wordCount.paragraphs'
  | 'myWorks.childrenMarkdownRemark.wordCount.sentences'
  | 'myWorks.childrenMarkdownRemark.wordCount.words'
  | 'myWorks.childrenMarkdownRemark.parent.id'
  | 'myWorks.childrenMarkdownRemark.parent.children'
  | 'myWorks.childrenMarkdownRemark.children'
  | 'myWorks.childrenMarkdownRemark.children.id'
  | 'myWorks.childrenMarkdownRemark.children.children'
  | 'myWorks.childrenMarkdownRemark.internal.content'
  | 'myWorks.childrenMarkdownRemark.internal.contentDigest'
  | 'myWorks.childrenMarkdownRemark.internal.description'
  | 'myWorks.childrenMarkdownRemark.internal.fieldOwners'
  | 'myWorks.childrenMarkdownRemark.internal.ignoreType'
  | 'myWorks.childrenMarkdownRemark.internal.mediaType'
  | 'myWorks.childrenMarkdownRemark.internal.owner'
  | 'myWorks.childrenMarkdownRemark.internal.type'
  | 'myWorks.childMarkdownRemark.id'
  | 'myWorks.childMarkdownRemark.frontmatter.title'
  | 'myWorks.childMarkdownRemark.excerpt'
  | 'myWorks.childMarkdownRemark.rawMarkdownBody'
  | 'myWorks.childMarkdownRemark.html'
  | 'myWorks.childMarkdownRemark.htmlAst'
  | 'myWorks.childMarkdownRemark.excerptAst'
  | 'myWorks.childMarkdownRemark.headings'
  | 'myWorks.childMarkdownRemark.headings.id'
  | 'myWorks.childMarkdownRemark.headings.value'
  | 'myWorks.childMarkdownRemark.headings.depth'
  | 'myWorks.childMarkdownRemark.timeToRead'
  | 'myWorks.childMarkdownRemark.tableOfContents'
  | 'myWorks.childMarkdownRemark.wordCount.paragraphs'
  | 'myWorks.childMarkdownRemark.wordCount.sentences'
  | 'myWorks.childMarkdownRemark.wordCount.words'
  | 'myWorks.childMarkdownRemark.parent.id'
  | 'myWorks.childMarkdownRemark.parent.children'
  | 'myWorks.childMarkdownRemark.children'
  | 'myWorks.childMarkdownRemark.children.id'
  | 'myWorks.childMarkdownRemark.children.children'
  | 'myWorks.childMarkdownRemark.internal.content'
  | 'myWorks.childMarkdownRemark.internal.contentDigest'
  | 'myWorks.childMarkdownRemark.internal.description'
  | 'myWorks.childMarkdownRemark.internal.fieldOwners'
  | 'myWorks.childMarkdownRemark.internal.ignoreType'
  | 'myWorks.childMarkdownRemark.internal.mediaType'
  | 'myWorks.childMarkdownRemark.internal.owner'
  | 'myWorks.childMarkdownRemark.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.parent.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.parent.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.children.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.children.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.internal.content'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.internal.contentDigest'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.internal.description'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.internal.ignoreType'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.internal.mediaType'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.internal.owner'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.parent.internal.type'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.parent.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.parent.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.children.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.children.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.internal.content'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.internal.contentDigest'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.internal.description'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.internal.fieldOwners'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.internal.ignoreType'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.internal.mediaType'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.internal.owner'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.children.internal.type'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.internal.content'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.internal.contentDigest'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.internal.description'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.internal.fieldOwners'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.internal.ignoreType'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.internal.mediaType'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.internal.owner'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.internal.type'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.programmingLanguages'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.sys.type'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.html'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.parent.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.parent.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.children.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.children.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.internal.content'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.internal.contentDigest'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.internal.description'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.internal.fieldOwners'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.internal.ignoreType'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.internal.mediaType'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.internal.owner'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.parent.internal.type'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.parent.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.parent.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.children.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.children.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.internal.content'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.internal.contentDigest'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.internal.description'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.internal.fieldOwners'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.internal.ignoreType'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.internal.mediaType'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.internal.owner'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.children.internal.type'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.internal.content'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.internal.contentDigest'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.internal.description'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.internal.fieldOwners'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.internal.ignoreType'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.internal.mediaType'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.internal.owner'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.internal.type'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.programmingLanguages'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.sys.type'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.html'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.html'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.headings'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.children.id'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.children.children'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulAuthorProgrammingLanguagesTextNode.childMarkdownRemark.internal.type'
  | 'childrenContentfulAuthorMyWorksTextNode'
  | 'childrenContentfulAuthorMyWorksTextNode.id'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.id'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.parent.id'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.parent.children'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.children'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.children.id'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.children.children'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.internal.content'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.internal.contentDigest'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.internal.description'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.internal.ignoreType'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.internal.mediaType'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.internal.owner'
  | 'childrenContentfulAuthorMyWorksTextNode.parent.internal.type'
  | 'childrenContentfulAuthorMyWorksTextNode.children'
  | 'childrenContentfulAuthorMyWorksTextNode.children.id'
  | 'childrenContentfulAuthorMyWorksTextNode.children.parent.id'
  | 'childrenContentfulAuthorMyWorksTextNode.children.parent.children'
  | 'childrenContentfulAuthorMyWorksTextNode.children.children'
  | 'childrenContentfulAuthorMyWorksTextNode.children.children.id'
  | 'childrenContentfulAuthorMyWorksTextNode.children.children.children'
  | 'childrenContentfulAuthorMyWorksTextNode.children.internal.content'
  | 'childrenContentfulAuthorMyWorksTextNode.children.internal.contentDigest'
  | 'childrenContentfulAuthorMyWorksTextNode.children.internal.description'
  | 'childrenContentfulAuthorMyWorksTextNode.children.internal.fieldOwners'
  | 'childrenContentfulAuthorMyWorksTextNode.children.internal.ignoreType'
  | 'childrenContentfulAuthorMyWorksTextNode.children.internal.mediaType'
  | 'childrenContentfulAuthorMyWorksTextNode.children.internal.owner'
  | 'childrenContentfulAuthorMyWorksTextNode.children.internal.type'
  | 'childrenContentfulAuthorMyWorksTextNode.internal.content'
  | 'childrenContentfulAuthorMyWorksTextNode.internal.contentDigest'
  | 'childrenContentfulAuthorMyWorksTextNode.internal.description'
  | 'childrenContentfulAuthorMyWorksTextNode.internal.fieldOwners'
  | 'childrenContentfulAuthorMyWorksTextNode.internal.ignoreType'
  | 'childrenContentfulAuthorMyWorksTextNode.internal.mediaType'
  | 'childrenContentfulAuthorMyWorksTextNode.internal.owner'
  | 'childrenContentfulAuthorMyWorksTextNode.internal.type'
  | 'childrenContentfulAuthorMyWorksTextNode.myWorks'
  | 'childrenContentfulAuthorMyWorksTextNode.sys.type'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.id'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.html'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.children'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulAuthorMyWorksTextNode.id'
  | 'childContentfulAuthorMyWorksTextNode.parent.id'
  | 'childContentfulAuthorMyWorksTextNode.parent.parent.id'
  | 'childContentfulAuthorMyWorksTextNode.parent.parent.children'
  | 'childContentfulAuthorMyWorksTextNode.parent.children'
  | 'childContentfulAuthorMyWorksTextNode.parent.children.id'
  | 'childContentfulAuthorMyWorksTextNode.parent.children.children'
  | 'childContentfulAuthorMyWorksTextNode.parent.internal.content'
  | 'childContentfulAuthorMyWorksTextNode.parent.internal.contentDigest'
  | 'childContentfulAuthorMyWorksTextNode.parent.internal.description'
  | 'childContentfulAuthorMyWorksTextNode.parent.internal.fieldOwners'
  | 'childContentfulAuthorMyWorksTextNode.parent.internal.ignoreType'
  | 'childContentfulAuthorMyWorksTextNode.parent.internal.mediaType'
  | 'childContentfulAuthorMyWorksTextNode.parent.internal.owner'
  | 'childContentfulAuthorMyWorksTextNode.parent.internal.type'
  | 'childContentfulAuthorMyWorksTextNode.children'
  | 'childContentfulAuthorMyWorksTextNode.children.id'
  | 'childContentfulAuthorMyWorksTextNode.children.parent.id'
  | 'childContentfulAuthorMyWorksTextNode.children.parent.children'
  | 'childContentfulAuthorMyWorksTextNode.children.children'
  | 'childContentfulAuthorMyWorksTextNode.children.children.id'
  | 'childContentfulAuthorMyWorksTextNode.children.children.children'
  | 'childContentfulAuthorMyWorksTextNode.children.internal.content'
  | 'childContentfulAuthorMyWorksTextNode.children.internal.contentDigest'
  | 'childContentfulAuthorMyWorksTextNode.children.internal.description'
  | 'childContentfulAuthorMyWorksTextNode.children.internal.fieldOwners'
  | 'childContentfulAuthorMyWorksTextNode.children.internal.ignoreType'
  | 'childContentfulAuthorMyWorksTextNode.children.internal.mediaType'
  | 'childContentfulAuthorMyWorksTextNode.children.internal.owner'
  | 'childContentfulAuthorMyWorksTextNode.children.internal.type'
  | 'childContentfulAuthorMyWorksTextNode.internal.content'
  | 'childContentfulAuthorMyWorksTextNode.internal.contentDigest'
  | 'childContentfulAuthorMyWorksTextNode.internal.description'
  | 'childContentfulAuthorMyWorksTextNode.internal.fieldOwners'
  | 'childContentfulAuthorMyWorksTextNode.internal.ignoreType'
  | 'childContentfulAuthorMyWorksTextNode.internal.mediaType'
  | 'childContentfulAuthorMyWorksTextNode.internal.owner'
  | 'childContentfulAuthorMyWorksTextNode.internal.type'
  | 'childContentfulAuthorMyWorksTextNode.myWorks'
  | 'childContentfulAuthorMyWorksTextNode.sys.type'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.id'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.html'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.children'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulAuthorMyWorksTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.id'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.html'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.headings'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.children'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.children.id'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.children.children'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulAuthorMyWorksTextNode.childMarkdownRemark.internal.type'
  | 'childrenContentfulAuthorMyHobbiesTextNode'
  | 'childrenContentfulAuthorMyHobbiesTextNode.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.parent.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.parent.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.children.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.children.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.internal.content'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.internal.contentDigest'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.internal.description'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.internal.ignoreType'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.internal.mediaType'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.internal.owner'
  | 'childrenContentfulAuthorMyHobbiesTextNode.parent.internal.type'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.parent.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.parent.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.children.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.children.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.internal.content'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.internal.contentDigest'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.internal.description'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.internal.fieldOwners'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.internal.ignoreType'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.internal.mediaType'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.internal.owner'
  | 'childrenContentfulAuthorMyHobbiesTextNode.children.internal.type'
  | 'childrenContentfulAuthorMyHobbiesTextNode.internal.content'
  | 'childrenContentfulAuthorMyHobbiesTextNode.internal.contentDigest'
  | 'childrenContentfulAuthorMyHobbiesTextNode.internal.description'
  | 'childrenContentfulAuthorMyHobbiesTextNode.internal.fieldOwners'
  | 'childrenContentfulAuthorMyHobbiesTextNode.internal.ignoreType'
  | 'childrenContentfulAuthorMyHobbiesTextNode.internal.mediaType'
  | 'childrenContentfulAuthorMyHobbiesTextNode.internal.owner'
  | 'childrenContentfulAuthorMyHobbiesTextNode.internal.type'
  | 'childrenContentfulAuthorMyHobbiesTextNode.myHobbies'
  | 'childrenContentfulAuthorMyHobbiesTextNode.sys.type'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.html'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulAuthorMyHobbiesTextNode.id'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.id'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.parent.id'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.parent.children'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.children'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.children.id'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.children.children'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.internal.content'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.internal.contentDigest'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.internal.description'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.internal.fieldOwners'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.internal.ignoreType'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.internal.mediaType'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.internal.owner'
  | 'childContentfulAuthorMyHobbiesTextNode.parent.internal.type'
  | 'childContentfulAuthorMyHobbiesTextNode.children'
  | 'childContentfulAuthorMyHobbiesTextNode.children.id'
  | 'childContentfulAuthorMyHobbiesTextNode.children.parent.id'
  | 'childContentfulAuthorMyHobbiesTextNode.children.parent.children'
  | 'childContentfulAuthorMyHobbiesTextNode.children.children'
  | 'childContentfulAuthorMyHobbiesTextNode.children.children.id'
  | 'childContentfulAuthorMyHobbiesTextNode.children.children.children'
  | 'childContentfulAuthorMyHobbiesTextNode.children.internal.content'
  | 'childContentfulAuthorMyHobbiesTextNode.children.internal.contentDigest'
  | 'childContentfulAuthorMyHobbiesTextNode.children.internal.description'
  | 'childContentfulAuthorMyHobbiesTextNode.children.internal.fieldOwners'
  | 'childContentfulAuthorMyHobbiesTextNode.children.internal.ignoreType'
  | 'childContentfulAuthorMyHobbiesTextNode.children.internal.mediaType'
  | 'childContentfulAuthorMyHobbiesTextNode.children.internal.owner'
  | 'childContentfulAuthorMyHobbiesTextNode.children.internal.type'
  | 'childContentfulAuthorMyHobbiesTextNode.internal.content'
  | 'childContentfulAuthorMyHobbiesTextNode.internal.contentDigest'
  | 'childContentfulAuthorMyHobbiesTextNode.internal.description'
  | 'childContentfulAuthorMyHobbiesTextNode.internal.fieldOwners'
  | 'childContentfulAuthorMyHobbiesTextNode.internal.ignoreType'
  | 'childContentfulAuthorMyHobbiesTextNode.internal.mediaType'
  | 'childContentfulAuthorMyHobbiesTextNode.internal.owner'
  | 'childContentfulAuthorMyHobbiesTextNode.internal.type'
  | 'childContentfulAuthorMyHobbiesTextNode.myHobbies'
  | 'childContentfulAuthorMyHobbiesTextNode.sys.type'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.id'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.html'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.children'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulAuthorMyHobbiesTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.id'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.html'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.headings'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.children'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.children.id'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.children.children'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulAuthorMyHobbiesTextNode.childMarkdownRemark.internal.type'
  | 'childrenContentfulAuthorDescriptionTextNode'
  | 'childrenContentfulAuthorDescriptionTextNode.id'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.id'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.children'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.children.id'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.children.children'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulAuthorDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulAuthorDescriptionTextNode.children'
  | 'childrenContentfulAuthorDescriptionTextNode.children.id'
  | 'childrenContentfulAuthorDescriptionTextNode.children.parent.id'
  | 'childrenContentfulAuthorDescriptionTextNode.children.parent.children'
  | 'childrenContentfulAuthorDescriptionTextNode.children.children'
  | 'childrenContentfulAuthorDescriptionTextNode.children.children.id'
  | 'childrenContentfulAuthorDescriptionTextNode.children.children.children'
  | 'childrenContentfulAuthorDescriptionTextNode.children.internal.content'
  | 'childrenContentfulAuthorDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulAuthorDescriptionTextNode.children.internal.description'
  | 'childrenContentfulAuthorDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulAuthorDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulAuthorDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulAuthorDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulAuthorDescriptionTextNode.children.internal.type'
  | 'childrenContentfulAuthorDescriptionTextNode.internal.content'
  | 'childrenContentfulAuthorDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulAuthorDescriptionTextNode.internal.description'
  | 'childrenContentfulAuthorDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulAuthorDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulAuthorDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulAuthorDescriptionTextNode.internal.owner'
  | 'childrenContentfulAuthorDescriptionTextNode.internal.type'
  | 'childrenContentfulAuthorDescriptionTextNode.description'
  | 'childrenContentfulAuthorDescriptionTextNode.sys.type'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.id'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.html'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.children'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulAuthorDescriptionTextNode.id'
  | 'childContentfulAuthorDescriptionTextNode.parent.id'
  | 'childContentfulAuthorDescriptionTextNode.parent.parent.id'
  | 'childContentfulAuthorDescriptionTextNode.parent.parent.children'
  | 'childContentfulAuthorDescriptionTextNode.parent.children'
  | 'childContentfulAuthorDescriptionTextNode.parent.children.id'
  | 'childContentfulAuthorDescriptionTextNode.parent.children.children'
  | 'childContentfulAuthorDescriptionTextNode.parent.internal.content'
  | 'childContentfulAuthorDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulAuthorDescriptionTextNode.parent.internal.description'
  | 'childContentfulAuthorDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulAuthorDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulAuthorDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulAuthorDescriptionTextNode.parent.internal.owner'
  | 'childContentfulAuthorDescriptionTextNode.parent.internal.type'
  | 'childContentfulAuthorDescriptionTextNode.children'
  | 'childContentfulAuthorDescriptionTextNode.children.id'
  | 'childContentfulAuthorDescriptionTextNode.children.parent.id'
  | 'childContentfulAuthorDescriptionTextNode.children.parent.children'
  | 'childContentfulAuthorDescriptionTextNode.children.children'
  | 'childContentfulAuthorDescriptionTextNode.children.children.id'
  | 'childContentfulAuthorDescriptionTextNode.children.children.children'
  | 'childContentfulAuthorDescriptionTextNode.children.internal.content'
  | 'childContentfulAuthorDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulAuthorDescriptionTextNode.children.internal.description'
  | 'childContentfulAuthorDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulAuthorDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulAuthorDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulAuthorDescriptionTextNode.children.internal.owner'
  | 'childContentfulAuthorDescriptionTextNode.children.internal.type'
  | 'childContentfulAuthorDescriptionTextNode.internal.content'
  | 'childContentfulAuthorDescriptionTextNode.internal.contentDigest'
  | 'childContentfulAuthorDescriptionTextNode.internal.description'
  | 'childContentfulAuthorDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulAuthorDescriptionTextNode.internal.ignoreType'
  | 'childContentfulAuthorDescriptionTextNode.internal.mediaType'
  | 'childContentfulAuthorDescriptionTextNode.internal.owner'
  | 'childContentfulAuthorDescriptionTextNode.internal.type'
  | 'childContentfulAuthorDescriptionTextNode.description'
  | 'childContentfulAuthorDescriptionTextNode.sys.type'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulAuthorDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.id'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.html'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.headings'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.children'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulAuthorDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulAuthorGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAuthorEdge>;
  readonly nodes: ReadonlyArray<ContentfulAuthor>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAuthorGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulAuthorGroupConnection_distinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_maxArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_minArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_sumArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

type ContentfulAuthorFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly nickName: Maybe<StringQueryOperatorInput>;
  readonly qiita: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly github: Maybe<StringQueryOperatorInput>;
  readonly avatarImage: Maybe<ContentfulAssetFilterInput>;
  readonly description: Maybe<contentfulAuthorDescriptionTextNodeFilterInput>;
  readonly programmingLanguages: Maybe<contentfulAuthorProgrammingLanguagesTextNodeFilterInput>;
  readonly myHobbies: Maybe<contentfulAuthorMyHobbiesTextNodeFilterInput>;
  readonly myWorks: Maybe<contentfulAuthorMyWorksTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAuthorSysFilterInput>;
  readonly childrenContentfulAuthorProgrammingLanguagesTextNode: Maybe<contentfulAuthorProgrammingLanguagesTextNodeFilterListInput>;
  readonly childContentfulAuthorProgrammingLanguagesTextNode: Maybe<contentfulAuthorProgrammingLanguagesTextNodeFilterInput>;
  readonly childrenContentfulAuthorMyWorksTextNode: Maybe<contentfulAuthorMyWorksTextNodeFilterListInput>;
  readonly childContentfulAuthorMyWorksTextNode: Maybe<contentfulAuthorMyWorksTextNodeFilterInput>;
  readonly childrenContentfulAuthorMyHobbiesTextNode: Maybe<contentfulAuthorMyHobbiesTextNodeFilterListInput>;
  readonly childContentfulAuthorMyHobbiesTextNode: Maybe<contentfulAuthorMyHobbiesTextNodeFilterInput>;
  readonly childrenContentfulAuthorDescriptionTextNode: Maybe<contentfulAuthorDescriptionTextNodeFilterListInput>;
  readonly childContentfulAuthorDescriptionTextNode: Maybe<contentfulAuthorDescriptionTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAuthorSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAuthorFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulMyPostBodyTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulMyPostBodyTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulMyPostBodyTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulMyPostSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulMyPostSysContentTypeFilterInput>;
};

type ContentfulMyPostSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulMyPostSysContentTypeSysFilterInput>;
};

type ContentfulMyPostSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulMyPostBodyTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulMyPostBodyTextNodeFilterInput>;
};

type ContentfulMyPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulMyPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulMyPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulMyPostGroupConnection>;
};


type ContentfulMyPostConnection_distinctArgs = {
  field: ContentfulMyPostFieldsEnum;
};


type ContentfulMyPostConnection_maxArgs = {
  field: ContentfulMyPostFieldsEnum;
};


type ContentfulMyPostConnection_minArgs = {
  field: ContentfulMyPostFieldsEnum;
};


type ContentfulMyPostConnection_sumArgs = {
  field: ContentfulMyPostFieldsEnum;
};


type ContentfulMyPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulMyPostFieldsEnum;
};

type ContentfulMyPostEdge = {
  readonly next: Maybe<ContentfulMyPost>;
  readonly node: ContentfulMyPost;
  readonly previous: Maybe<ContentfulMyPost>;
};

type ContentfulMyPostFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'description'
  | 'publishDate'
  | 'body.id'
  | 'body.parent.id'
  | 'body.parent.parent.id'
  | 'body.parent.parent.children'
  | 'body.parent.children'
  | 'body.parent.children.id'
  | 'body.parent.children.children'
  | 'body.parent.internal.content'
  | 'body.parent.internal.contentDigest'
  | 'body.parent.internal.description'
  | 'body.parent.internal.fieldOwners'
  | 'body.parent.internal.ignoreType'
  | 'body.parent.internal.mediaType'
  | 'body.parent.internal.owner'
  | 'body.parent.internal.type'
  | 'body.children'
  | 'body.children.id'
  | 'body.children.parent.id'
  | 'body.children.parent.children'
  | 'body.children.children'
  | 'body.children.children.id'
  | 'body.children.children.children'
  | 'body.children.internal.content'
  | 'body.children.internal.contentDigest'
  | 'body.children.internal.description'
  | 'body.children.internal.fieldOwners'
  | 'body.children.internal.ignoreType'
  | 'body.children.internal.mediaType'
  | 'body.children.internal.owner'
  | 'body.children.internal.type'
  | 'body.internal.content'
  | 'body.internal.contentDigest'
  | 'body.internal.description'
  | 'body.internal.fieldOwners'
  | 'body.internal.ignoreType'
  | 'body.internal.mediaType'
  | 'body.internal.owner'
  | 'body.internal.type'
  | 'body.body'
  | 'body.sys.type'
  | 'body.childrenMarkdownRemark'
  | 'body.childrenMarkdownRemark.id'
  | 'body.childrenMarkdownRemark.frontmatter.title'
  | 'body.childrenMarkdownRemark.excerpt'
  | 'body.childrenMarkdownRemark.rawMarkdownBody'
  | 'body.childrenMarkdownRemark.html'
  | 'body.childrenMarkdownRemark.htmlAst'
  | 'body.childrenMarkdownRemark.excerptAst'
  | 'body.childrenMarkdownRemark.headings'
  | 'body.childrenMarkdownRemark.headings.id'
  | 'body.childrenMarkdownRemark.headings.value'
  | 'body.childrenMarkdownRemark.headings.depth'
  | 'body.childrenMarkdownRemark.timeToRead'
  | 'body.childrenMarkdownRemark.tableOfContents'
  | 'body.childrenMarkdownRemark.wordCount.paragraphs'
  | 'body.childrenMarkdownRemark.wordCount.sentences'
  | 'body.childrenMarkdownRemark.wordCount.words'
  | 'body.childrenMarkdownRemark.parent.id'
  | 'body.childrenMarkdownRemark.parent.children'
  | 'body.childrenMarkdownRemark.children'
  | 'body.childrenMarkdownRemark.children.id'
  | 'body.childrenMarkdownRemark.children.children'
  | 'body.childrenMarkdownRemark.internal.content'
  | 'body.childrenMarkdownRemark.internal.contentDigest'
  | 'body.childrenMarkdownRemark.internal.description'
  | 'body.childrenMarkdownRemark.internal.fieldOwners'
  | 'body.childrenMarkdownRemark.internal.ignoreType'
  | 'body.childrenMarkdownRemark.internal.mediaType'
  | 'body.childrenMarkdownRemark.internal.owner'
  | 'body.childrenMarkdownRemark.internal.type'
  | 'body.childMarkdownRemark.id'
  | 'body.childMarkdownRemark.frontmatter.title'
  | 'body.childMarkdownRemark.excerpt'
  | 'body.childMarkdownRemark.rawMarkdownBody'
  | 'body.childMarkdownRemark.html'
  | 'body.childMarkdownRemark.htmlAst'
  | 'body.childMarkdownRemark.excerptAst'
  | 'body.childMarkdownRemark.headings'
  | 'body.childMarkdownRemark.headings.id'
  | 'body.childMarkdownRemark.headings.value'
  | 'body.childMarkdownRemark.headings.depth'
  | 'body.childMarkdownRemark.timeToRead'
  | 'body.childMarkdownRemark.tableOfContents'
  | 'body.childMarkdownRemark.wordCount.paragraphs'
  | 'body.childMarkdownRemark.wordCount.sentences'
  | 'body.childMarkdownRemark.wordCount.words'
  | 'body.childMarkdownRemark.parent.id'
  | 'body.childMarkdownRemark.parent.children'
  | 'body.childMarkdownRemark.children'
  | 'body.childMarkdownRemark.children.id'
  | 'body.childMarkdownRemark.children.children'
  | 'body.childMarkdownRemark.internal.content'
  | 'body.childMarkdownRemark.internal.contentDigest'
  | 'body.childMarkdownRemark.internal.description'
  | 'body.childMarkdownRemark.internal.fieldOwners'
  | 'body.childMarkdownRemark.internal.ignoreType'
  | 'body.childMarkdownRemark.internal.mediaType'
  | 'body.childMarkdownRemark.internal.owner'
  | 'body.childMarkdownRemark.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulMyPostBodyTextNode'
  | 'childrenContentfulMyPostBodyTextNode.id'
  | 'childrenContentfulMyPostBodyTextNode.parent.id'
  | 'childrenContentfulMyPostBodyTextNode.parent.parent.id'
  | 'childrenContentfulMyPostBodyTextNode.parent.parent.children'
  | 'childrenContentfulMyPostBodyTextNode.parent.children'
  | 'childrenContentfulMyPostBodyTextNode.parent.children.id'
  | 'childrenContentfulMyPostBodyTextNode.parent.children.children'
  | 'childrenContentfulMyPostBodyTextNode.parent.internal.content'
  | 'childrenContentfulMyPostBodyTextNode.parent.internal.contentDigest'
  | 'childrenContentfulMyPostBodyTextNode.parent.internal.description'
  | 'childrenContentfulMyPostBodyTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulMyPostBodyTextNode.parent.internal.ignoreType'
  | 'childrenContentfulMyPostBodyTextNode.parent.internal.mediaType'
  | 'childrenContentfulMyPostBodyTextNode.parent.internal.owner'
  | 'childrenContentfulMyPostBodyTextNode.parent.internal.type'
  | 'childrenContentfulMyPostBodyTextNode.children'
  | 'childrenContentfulMyPostBodyTextNode.children.id'
  | 'childrenContentfulMyPostBodyTextNode.children.parent.id'
  | 'childrenContentfulMyPostBodyTextNode.children.parent.children'
  | 'childrenContentfulMyPostBodyTextNode.children.children'
  | 'childrenContentfulMyPostBodyTextNode.children.children.id'
  | 'childrenContentfulMyPostBodyTextNode.children.children.children'
  | 'childrenContentfulMyPostBodyTextNode.children.internal.content'
  | 'childrenContentfulMyPostBodyTextNode.children.internal.contentDigest'
  | 'childrenContentfulMyPostBodyTextNode.children.internal.description'
  | 'childrenContentfulMyPostBodyTextNode.children.internal.fieldOwners'
  | 'childrenContentfulMyPostBodyTextNode.children.internal.ignoreType'
  | 'childrenContentfulMyPostBodyTextNode.children.internal.mediaType'
  | 'childrenContentfulMyPostBodyTextNode.children.internal.owner'
  | 'childrenContentfulMyPostBodyTextNode.children.internal.type'
  | 'childrenContentfulMyPostBodyTextNode.internal.content'
  | 'childrenContentfulMyPostBodyTextNode.internal.contentDigest'
  | 'childrenContentfulMyPostBodyTextNode.internal.description'
  | 'childrenContentfulMyPostBodyTextNode.internal.fieldOwners'
  | 'childrenContentfulMyPostBodyTextNode.internal.ignoreType'
  | 'childrenContentfulMyPostBodyTextNode.internal.mediaType'
  | 'childrenContentfulMyPostBodyTextNode.internal.owner'
  | 'childrenContentfulMyPostBodyTextNode.internal.type'
  | 'childrenContentfulMyPostBodyTextNode.body'
  | 'childrenContentfulMyPostBodyTextNode.sys.type'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.id'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.html'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.children'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulMyPostBodyTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulMyPostBodyTextNode.id'
  | 'childContentfulMyPostBodyTextNode.parent.id'
  | 'childContentfulMyPostBodyTextNode.parent.parent.id'
  | 'childContentfulMyPostBodyTextNode.parent.parent.children'
  | 'childContentfulMyPostBodyTextNode.parent.children'
  | 'childContentfulMyPostBodyTextNode.parent.children.id'
  | 'childContentfulMyPostBodyTextNode.parent.children.children'
  | 'childContentfulMyPostBodyTextNode.parent.internal.content'
  | 'childContentfulMyPostBodyTextNode.parent.internal.contentDigest'
  | 'childContentfulMyPostBodyTextNode.parent.internal.description'
  | 'childContentfulMyPostBodyTextNode.parent.internal.fieldOwners'
  | 'childContentfulMyPostBodyTextNode.parent.internal.ignoreType'
  | 'childContentfulMyPostBodyTextNode.parent.internal.mediaType'
  | 'childContentfulMyPostBodyTextNode.parent.internal.owner'
  | 'childContentfulMyPostBodyTextNode.parent.internal.type'
  | 'childContentfulMyPostBodyTextNode.children'
  | 'childContentfulMyPostBodyTextNode.children.id'
  | 'childContentfulMyPostBodyTextNode.children.parent.id'
  | 'childContentfulMyPostBodyTextNode.children.parent.children'
  | 'childContentfulMyPostBodyTextNode.children.children'
  | 'childContentfulMyPostBodyTextNode.children.children.id'
  | 'childContentfulMyPostBodyTextNode.children.children.children'
  | 'childContentfulMyPostBodyTextNode.children.internal.content'
  | 'childContentfulMyPostBodyTextNode.children.internal.contentDigest'
  | 'childContentfulMyPostBodyTextNode.children.internal.description'
  | 'childContentfulMyPostBodyTextNode.children.internal.fieldOwners'
  | 'childContentfulMyPostBodyTextNode.children.internal.ignoreType'
  | 'childContentfulMyPostBodyTextNode.children.internal.mediaType'
  | 'childContentfulMyPostBodyTextNode.children.internal.owner'
  | 'childContentfulMyPostBodyTextNode.children.internal.type'
  | 'childContentfulMyPostBodyTextNode.internal.content'
  | 'childContentfulMyPostBodyTextNode.internal.contentDigest'
  | 'childContentfulMyPostBodyTextNode.internal.description'
  | 'childContentfulMyPostBodyTextNode.internal.fieldOwners'
  | 'childContentfulMyPostBodyTextNode.internal.ignoreType'
  | 'childContentfulMyPostBodyTextNode.internal.mediaType'
  | 'childContentfulMyPostBodyTextNode.internal.owner'
  | 'childContentfulMyPostBodyTextNode.internal.type'
  | 'childContentfulMyPostBodyTextNode.body'
  | 'childContentfulMyPostBodyTextNode.sys.type'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.id'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.html'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.children'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulMyPostBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.id'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.html'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.headings'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.children'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.children.id'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.children.children'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulMyPostBodyTextNode.childMarkdownRemark.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulMyPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulMyPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulMyPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulMyPostGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulMyPostGroupConnection_distinctArgs = {
  field: ContentfulMyPostFieldsEnum;
};


type ContentfulMyPostGroupConnection_maxArgs = {
  field: ContentfulMyPostFieldsEnum;
};


type ContentfulMyPostGroupConnection_minArgs = {
  field: ContentfulMyPostFieldsEnum;
};


type ContentfulMyPostGroupConnection_sumArgs = {
  field: ContentfulMyPostFieldsEnum;
};


type ContentfulMyPostGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulMyPostFieldsEnum;
};

type ContentfulMyPostFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly publishDate: Maybe<DateQueryOperatorInput>;
  readonly body: Maybe<contentfulMyPostBodyTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulMyPostSysFilterInput>;
  readonly childrenContentfulMyPostBodyTextNode: Maybe<contentfulMyPostBodyTextNodeFilterListInput>;
  readonly childContentfulMyPostBodyTextNode: Maybe<contentfulMyPostBodyTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulMyPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulMyPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulMyWorkDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulMyWorkDescriptionTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulMyWorkDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulMyWorkSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulMyWorkSysContentTypeFilterInput>;
};

type ContentfulMyWorkSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulMyWorkSysContentTypeSysFilterInput>;
};

type ContentfulMyWorkSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulMyWorkDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulMyWorkDescriptionTextNodeFilterInput>;
};

type ContentfulMyWorkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulMyWorkEdge>;
  readonly nodes: ReadonlyArray<ContentfulMyWork>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulMyWorkGroupConnection>;
};


type ContentfulMyWorkConnection_distinctArgs = {
  field: ContentfulMyWorkFieldsEnum;
};


type ContentfulMyWorkConnection_maxArgs = {
  field: ContentfulMyWorkFieldsEnum;
};


type ContentfulMyWorkConnection_minArgs = {
  field: ContentfulMyWorkFieldsEnum;
};


type ContentfulMyWorkConnection_sumArgs = {
  field: ContentfulMyWorkFieldsEnum;
};


type ContentfulMyWorkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulMyWorkFieldsEnum;
};

type ContentfulMyWorkEdge = {
  readonly next: Maybe<ContentfulMyWork>;
  readonly node: ContentfulMyWork;
  readonly previous: Maybe<ContentfulMyWork>;
};

type ContentfulMyWorkFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'url'
  | 'repositoryUrl'
  | 'description.id'
  | 'description.parent.id'
  | 'description.parent.parent.id'
  | 'description.parent.parent.children'
  | 'description.parent.children'
  | 'description.parent.children.id'
  | 'description.parent.children.children'
  | 'description.parent.internal.content'
  | 'description.parent.internal.contentDigest'
  | 'description.parent.internal.description'
  | 'description.parent.internal.fieldOwners'
  | 'description.parent.internal.ignoreType'
  | 'description.parent.internal.mediaType'
  | 'description.parent.internal.owner'
  | 'description.parent.internal.type'
  | 'description.children'
  | 'description.children.id'
  | 'description.children.parent.id'
  | 'description.children.parent.children'
  | 'description.children.children'
  | 'description.children.children.id'
  | 'description.children.children.children'
  | 'description.children.internal.content'
  | 'description.children.internal.contentDigest'
  | 'description.children.internal.description'
  | 'description.children.internal.fieldOwners'
  | 'description.children.internal.ignoreType'
  | 'description.children.internal.mediaType'
  | 'description.children.internal.owner'
  | 'description.children.internal.type'
  | 'description.internal.content'
  | 'description.internal.contentDigest'
  | 'description.internal.description'
  | 'description.internal.fieldOwners'
  | 'description.internal.ignoreType'
  | 'description.internal.mediaType'
  | 'description.internal.owner'
  | 'description.internal.type'
  | 'description.description'
  | 'description.sys.type'
  | 'description.childrenMarkdownRemark'
  | 'description.childrenMarkdownRemark.id'
  | 'description.childrenMarkdownRemark.frontmatter.title'
  | 'description.childrenMarkdownRemark.excerpt'
  | 'description.childrenMarkdownRemark.rawMarkdownBody'
  | 'description.childrenMarkdownRemark.html'
  | 'description.childrenMarkdownRemark.htmlAst'
  | 'description.childrenMarkdownRemark.excerptAst'
  | 'description.childrenMarkdownRemark.headings'
  | 'description.childrenMarkdownRemark.headings.id'
  | 'description.childrenMarkdownRemark.headings.value'
  | 'description.childrenMarkdownRemark.headings.depth'
  | 'description.childrenMarkdownRemark.timeToRead'
  | 'description.childrenMarkdownRemark.tableOfContents'
  | 'description.childrenMarkdownRemark.wordCount.paragraphs'
  | 'description.childrenMarkdownRemark.wordCount.sentences'
  | 'description.childrenMarkdownRemark.wordCount.words'
  | 'description.childrenMarkdownRemark.parent.id'
  | 'description.childrenMarkdownRemark.parent.children'
  | 'description.childrenMarkdownRemark.children'
  | 'description.childrenMarkdownRemark.children.id'
  | 'description.childrenMarkdownRemark.children.children'
  | 'description.childrenMarkdownRemark.internal.content'
  | 'description.childrenMarkdownRemark.internal.contentDigest'
  | 'description.childrenMarkdownRemark.internal.description'
  | 'description.childrenMarkdownRemark.internal.fieldOwners'
  | 'description.childrenMarkdownRemark.internal.ignoreType'
  | 'description.childrenMarkdownRemark.internal.mediaType'
  | 'description.childrenMarkdownRemark.internal.owner'
  | 'description.childrenMarkdownRemark.internal.type'
  | 'description.childMarkdownRemark.id'
  | 'description.childMarkdownRemark.frontmatter.title'
  | 'description.childMarkdownRemark.excerpt'
  | 'description.childMarkdownRemark.rawMarkdownBody'
  | 'description.childMarkdownRemark.html'
  | 'description.childMarkdownRemark.htmlAst'
  | 'description.childMarkdownRemark.excerptAst'
  | 'description.childMarkdownRemark.headings'
  | 'description.childMarkdownRemark.headings.id'
  | 'description.childMarkdownRemark.headings.value'
  | 'description.childMarkdownRemark.headings.depth'
  | 'description.childMarkdownRemark.timeToRead'
  | 'description.childMarkdownRemark.tableOfContents'
  | 'description.childMarkdownRemark.wordCount.paragraphs'
  | 'description.childMarkdownRemark.wordCount.sentences'
  | 'description.childMarkdownRemark.wordCount.words'
  | 'description.childMarkdownRemark.parent.id'
  | 'description.childMarkdownRemark.parent.children'
  | 'description.childMarkdownRemark.children'
  | 'description.childMarkdownRemark.children.id'
  | 'description.childMarkdownRemark.children.children'
  | 'description.childMarkdownRemark.internal.content'
  | 'description.childMarkdownRemark.internal.contentDigest'
  | 'description.childMarkdownRemark.internal.description'
  | 'description.childMarkdownRemark.internal.fieldOwners'
  | 'description.childMarkdownRemark.internal.ignoreType'
  | 'description.childMarkdownRemark.internal.mediaType'
  | 'description.childMarkdownRemark.internal.owner'
  | 'description.childMarkdownRemark.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulMyWorkDescriptionTextNode'
  | 'childrenContentfulMyWorkDescriptionTextNode.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.children.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.children.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulMyWorkDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulMyWorkDescriptionTextNode.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.parent.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.parent.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.children.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.children.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.internal.content'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.internal.description'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulMyWorkDescriptionTextNode.children.internal.type'
  | 'childrenContentfulMyWorkDescriptionTextNode.internal.content'
  | 'childrenContentfulMyWorkDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulMyWorkDescriptionTextNode.internal.description'
  | 'childrenContentfulMyWorkDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulMyWorkDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulMyWorkDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulMyWorkDescriptionTextNode.internal.owner'
  | 'childrenContentfulMyWorkDescriptionTextNode.internal.type'
  | 'childrenContentfulMyWorkDescriptionTextNode.description'
  | 'childrenContentfulMyWorkDescriptionTextNode.sys.type'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.html'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulMyWorkDescriptionTextNode.id'
  | 'childContentfulMyWorkDescriptionTextNode.parent.id'
  | 'childContentfulMyWorkDescriptionTextNode.parent.parent.id'
  | 'childContentfulMyWorkDescriptionTextNode.parent.parent.children'
  | 'childContentfulMyWorkDescriptionTextNode.parent.children'
  | 'childContentfulMyWorkDescriptionTextNode.parent.children.id'
  | 'childContentfulMyWorkDescriptionTextNode.parent.children.children'
  | 'childContentfulMyWorkDescriptionTextNode.parent.internal.content'
  | 'childContentfulMyWorkDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulMyWorkDescriptionTextNode.parent.internal.description'
  | 'childContentfulMyWorkDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulMyWorkDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulMyWorkDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulMyWorkDescriptionTextNode.parent.internal.owner'
  | 'childContentfulMyWorkDescriptionTextNode.parent.internal.type'
  | 'childContentfulMyWorkDescriptionTextNode.children'
  | 'childContentfulMyWorkDescriptionTextNode.children.id'
  | 'childContentfulMyWorkDescriptionTextNode.children.parent.id'
  | 'childContentfulMyWorkDescriptionTextNode.children.parent.children'
  | 'childContentfulMyWorkDescriptionTextNode.children.children'
  | 'childContentfulMyWorkDescriptionTextNode.children.children.id'
  | 'childContentfulMyWorkDescriptionTextNode.children.children.children'
  | 'childContentfulMyWorkDescriptionTextNode.children.internal.content'
  | 'childContentfulMyWorkDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulMyWorkDescriptionTextNode.children.internal.description'
  | 'childContentfulMyWorkDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulMyWorkDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulMyWorkDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulMyWorkDescriptionTextNode.children.internal.owner'
  | 'childContentfulMyWorkDescriptionTextNode.children.internal.type'
  | 'childContentfulMyWorkDescriptionTextNode.internal.content'
  | 'childContentfulMyWorkDescriptionTextNode.internal.contentDigest'
  | 'childContentfulMyWorkDescriptionTextNode.internal.description'
  | 'childContentfulMyWorkDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulMyWorkDescriptionTextNode.internal.ignoreType'
  | 'childContentfulMyWorkDescriptionTextNode.internal.mediaType'
  | 'childContentfulMyWorkDescriptionTextNode.internal.owner'
  | 'childContentfulMyWorkDescriptionTextNode.internal.type'
  | 'childContentfulMyWorkDescriptionTextNode.description'
  | 'childContentfulMyWorkDescriptionTextNode.sys.type'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulMyWorkDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.id'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.html'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.headings'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.children'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulMyWorkDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulMyWorkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulMyWorkEdge>;
  readonly nodes: ReadonlyArray<ContentfulMyWork>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulMyWorkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulMyWorkGroupConnection_distinctArgs = {
  field: ContentfulMyWorkFieldsEnum;
};


type ContentfulMyWorkGroupConnection_maxArgs = {
  field: ContentfulMyWorkFieldsEnum;
};


type ContentfulMyWorkGroupConnection_minArgs = {
  field: ContentfulMyWorkFieldsEnum;
};


type ContentfulMyWorkGroupConnection_sumArgs = {
  field: ContentfulMyWorkFieldsEnum;
};


type ContentfulMyWorkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulMyWorkFieldsEnum;
};

type ContentfulMyWorkFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly repositoryUrl: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<contentfulMyWorkDescriptionTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulMyWorkSysFilterInput>;
  readonly childrenContentfulMyWorkDescriptionTextNode: Maybe<contentfulMyWorkDescriptionTextNodeFilterListInput>;
  readonly childContentfulMyWorkDescriptionTextNode: Maybe<contentfulMyWorkDescriptionTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulMyWorkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulMyWorkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulMyWorkDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulMyWorkDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulMyWorkDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulMyWorkDescriptionTextNodeGroupConnection>;
};


type contentfulMyWorkDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulMyWorkDescriptionTextNodeFieldsEnum;
};


type contentfulMyWorkDescriptionTextNodeConnection_maxArgs = {
  field: contentfulMyWorkDescriptionTextNodeFieldsEnum;
};


type contentfulMyWorkDescriptionTextNodeConnection_minArgs = {
  field: contentfulMyWorkDescriptionTextNodeFieldsEnum;
};


type contentfulMyWorkDescriptionTextNodeConnection_sumArgs = {
  field: contentfulMyWorkDescriptionTextNodeFieldsEnum;
};


type contentfulMyWorkDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulMyWorkDescriptionTextNodeFieldsEnum;
};

type contentfulMyWorkDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulMyWorkDescriptionTextNode>;
  readonly node: contentfulMyWorkDescriptionTextNode;
  readonly previous: Maybe<contentfulMyWorkDescriptionTextNode>;
};

type contentfulMyWorkDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'description'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulMyWorkDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulMyWorkDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulMyWorkDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulMyWorkDescriptionTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulMyWorkDescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulMyWorkDescriptionTextNodeFieldsEnum;
};


type contentfulMyWorkDescriptionTextNodeGroupConnection_maxArgs = {
  field: contentfulMyWorkDescriptionTextNodeFieldsEnum;
};


type contentfulMyWorkDescriptionTextNodeGroupConnection_minArgs = {
  field: contentfulMyWorkDescriptionTextNodeFieldsEnum;
};


type contentfulMyWorkDescriptionTextNodeGroupConnection_sumArgs = {
  field: contentfulMyWorkDescriptionTextNodeFieldsEnum;
};


type contentfulMyWorkDescriptionTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulMyWorkDescriptionTextNodeFieldsEnum;
};

type contentfulMyWorkDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulMyWorkDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulMyPostBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulMyPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulMyPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulMyPostBodyTextNodeGroupConnection>;
};


type contentfulMyPostBodyTextNodeConnection_distinctArgs = {
  field: contentfulMyPostBodyTextNodeFieldsEnum;
};


type contentfulMyPostBodyTextNodeConnection_maxArgs = {
  field: contentfulMyPostBodyTextNodeFieldsEnum;
};


type contentfulMyPostBodyTextNodeConnection_minArgs = {
  field: contentfulMyPostBodyTextNodeFieldsEnum;
};


type contentfulMyPostBodyTextNodeConnection_sumArgs = {
  field: contentfulMyPostBodyTextNodeFieldsEnum;
};


type contentfulMyPostBodyTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulMyPostBodyTextNodeFieldsEnum;
};

type contentfulMyPostBodyTextNodeEdge = {
  readonly next: Maybe<contentfulMyPostBodyTextNode>;
  readonly node: contentfulMyPostBodyTextNode;
  readonly previous: Maybe<contentfulMyPostBodyTextNode>;
};

type contentfulMyPostBodyTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'body'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulMyPostBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulMyPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulMyPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulMyPostBodyTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulMyPostBodyTextNodeGroupConnection_distinctArgs = {
  field: contentfulMyPostBodyTextNodeFieldsEnum;
};


type contentfulMyPostBodyTextNodeGroupConnection_maxArgs = {
  field: contentfulMyPostBodyTextNodeFieldsEnum;
};


type contentfulMyPostBodyTextNodeGroupConnection_minArgs = {
  field: contentfulMyPostBodyTextNodeFieldsEnum;
};


type contentfulMyPostBodyTextNodeGroupConnection_sumArgs = {
  field: contentfulMyPostBodyTextNodeFieldsEnum;
};


type contentfulMyPostBodyTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulMyPostBodyTextNodeFieldsEnum;
};

type contentfulMyPostBodyTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulMyPostBodyTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulAuthorProgrammingLanguagesTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorProgrammingLanguagesTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorProgrammingLanguagesTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAuthorProgrammingLanguagesTextNodeGroupConnection>;
};


type contentfulAuthorProgrammingLanguagesTextNodeConnection_distinctArgs = {
  field: contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum;
};


type contentfulAuthorProgrammingLanguagesTextNodeConnection_maxArgs = {
  field: contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum;
};


type contentfulAuthorProgrammingLanguagesTextNodeConnection_minArgs = {
  field: contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum;
};


type contentfulAuthorProgrammingLanguagesTextNodeConnection_sumArgs = {
  field: contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum;
};


type contentfulAuthorProgrammingLanguagesTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum;
};

type contentfulAuthorProgrammingLanguagesTextNodeEdge = {
  readonly next: Maybe<contentfulAuthorProgrammingLanguagesTextNode>;
  readonly node: contentfulAuthorProgrammingLanguagesTextNode;
  readonly previous: Maybe<contentfulAuthorProgrammingLanguagesTextNode>;
};

type contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'programmingLanguages'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulAuthorProgrammingLanguagesTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorProgrammingLanguagesTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorProgrammingLanguagesTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAuthorProgrammingLanguagesTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulAuthorProgrammingLanguagesTextNodeGroupConnection_distinctArgs = {
  field: contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum;
};


type contentfulAuthorProgrammingLanguagesTextNodeGroupConnection_maxArgs = {
  field: contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum;
};


type contentfulAuthorProgrammingLanguagesTextNodeGroupConnection_minArgs = {
  field: contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum;
};


type contentfulAuthorProgrammingLanguagesTextNodeGroupConnection_sumArgs = {
  field: contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum;
};


type contentfulAuthorProgrammingLanguagesTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum;
};

type contentfulAuthorProgrammingLanguagesTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulAuthorProgrammingLanguagesTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulAuthorMyWorksTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorMyWorksTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorMyWorksTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAuthorMyWorksTextNodeGroupConnection>;
};


type contentfulAuthorMyWorksTextNodeConnection_distinctArgs = {
  field: contentfulAuthorMyWorksTextNodeFieldsEnum;
};


type contentfulAuthorMyWorksTextNodeConnection_maxArgs = {
  field: contentfulAuthorMyWorksTextNodeFieldsEnum;
};


type contentfulAuthorMyWorksTextNodeConnection_minArgs = {
  field: contentfulAuthorMyWorksTextNodeFieldsEnum;
};


type contentfulAuthorMyWorksTextNodeConnection_sumArgs = {
  field: contentfulAuthorMyWorksTextNodeFieldsEnum;
};


type contentfulAuthorMyWorksTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAuthorMyWorksTextNodeFieldsEnum;
};

type contentfulAuthorMyWorksTextNodeEdge = {
  readonly next: Maybe<contentfulAuthorMyWorksTextNode>;
  readonly node: contentfulAuthorMyWorksTextNode;
  readonly previous: Maybe<contentfulAuthorMyWorksTextNode>;
};

type contentfulAuthorMyWorksTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'myWorks'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulAuthorMyWorksTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorMyWorksTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorMyWorksTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAuthorMyWorksTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulAuthorMyWorksTextNodeGroupConnection_distinctArgs = {
  field: contentfulAuthorMyWorksTextNodeFieldsEnum;
};


type contentfulAuthorMyWorksTextNodeGroupConnection_maxArgs = {
  field: contentfulAuthorMyWorksTextNodeFieldsEnum;
};


type contentfulAuthorMyWorksTextNodeGroupConnection_minArgs = {
  field: contentfulAuthorMyWorksTextNodeFieldsEnum;
};


type contentfulAuthorMyWorksTextNodeGroupConnection_sumArgs = {
  field: contentfulAuthorMyWorksTextNodeFieldsEnum;
};


type contentfulAuthorMyWorksTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAuthorMyWorksTextNodeFieldsEnum;
};

type contentfulAuthorMyWorksTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulAuthorMyWorksTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulAuthorMyHobbiesTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorMyHobbiesTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorMyHobbiesTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAuthorMyHobbiesTextNodeGroupConnection>;
};


type contentfulAuthorMyHobbiesTextNodeConnection_distinctArgs = {
  field: contentfulAuthorMyHobbiesTextNodeFieldsEnum;
};


type contentfulAuthorMyHobbiesTextNodeConnection_maxArgs = {
  field: contentfulAuthorMyHobbiesTextNodeFieldsEnum;
};


type contentfulAuthorMyHobbiesTextNodeConnection_minArgs = {
  field: contentfulAuthorMyHobbiesTextNodeFieldsEnum;
};


type contentfulAuthorMyHobbiesTextNodeConnection_sumArgs = {
  field: contentfulAuthorMyHobbiesTextNodeFieldsEnum;
};


type contentfulAuthorMyHobbiesTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAuthorMyHobbiesTextNodeFieldsEnum;
};

type contentfulAuthorMyHobbiesTextNodeEdge = {
  readonly next: Maybe<contentfulAuthorMyHobbiesTextNode>;
  readonly node: contentfulAuthorMyHobbiesTextNode;
  readonly previous: Maybe<contentfulAuthorMyHobbiesTextNode>;
};

type contentfulAuthorMyHobbiesTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'myHobbies'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulAuthorMyHobbiesTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorMyHobbiesTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorMyHobbiesTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAuthorMyHobbiesTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulAuthorMyHobbiesTextNodeGroupConnection_distinctArgs = {
  field: contentfulAuthorMyHobbiesTextNodeFieldsEnum;
};


type contentfulAuthorMyHobbiesTextNodeGroupConnection_maxArgs = {
  field: contentfulAuthorMyHobbiesTextNodeFieldsEnum;
};


type contentfulAuthorMyHobbiesTextNodeGroupConnection_minArgs = {
  field: contentfulAuthorMyHobbiesTextNodeFieldsEnum;
};


type contentfulAuthorMyHobbiesTextNodeGroupConnection_sumArgs = {
  field: contentfulAuthorMyHobbiesTextNodeFieldsEnum;
};


type contentfulAuthorMyHobbiesTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAuthorMyHobbiesTextNodeFieldsEnum;
};

type contentfulAuthorMyHobbiesTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulAuthorMyHobbiesTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulAuthorDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAuthorDescriptionTextNodeGroupConnection>;
};


type contentfulAuthorDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulAuthorDescriptionTextNodeFieldsEnum;
};


type contentfulAuthorDescriptionTextNodeConnection_maxArgs = {
  field: contentfulAuthorDescriptionTextNodeFieldsEnum;
};


type contentfulAuthorDescriptionTextNodeConnection_minArgs = {
  field: contentfulAuthorDescriptionTextNodeFieldsEnum;
};


type contentfulAuthorDescriptionTextNodeConnection_sumArgs = {
  field: contentfulAuthorDescriptionTextNodeFieldsEnum;
};


type contentfulAuthorDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAuthorDescriptionTextNodeFieldsEnum;
};

type contentfulAuthorDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulAuthorDescriptionTextNode>;
  readonly node: contentfulAuthorDescriptionTextNode;
  readonly previous: Maybe<contentfulAuthorDescriptionTextNode>;
};

type contentfulAuthorDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'description'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulAuthorDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAuthorDescriptionTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulAuthorDescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulAuthorDescriptionTextNodeFieldsEnum;
};


type contentfulAuthorDescriptionTextNodeGroupConnection_maxArgs = {
  field: contentfulAuthorDescriptionTextNodeFieldsEnum;
};


type contentfulAuthorDescriptionTextNodeGroupConnection_minArgs = {
  field: contentfulAuthorDescriptionTextNodeFieldsEnum;
};


type contentfulAuthorDescriptionTextNodeGroupConnection_sumArgs = {
  field: contentfulAuthorDescriptionTextNodeFieldsEnum;
};


type contentfulAuthorDescriptionTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAuthorDescriptionTextNodeFieldsEnum;
};

type contentfulAuthorDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulAuthorDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys.type';

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulContentTypeGroupConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type FindAuthorQueryVariables = Exact<{ [key: string]: never; }>;


type FindAuthorQuery = { readonly contentfulAuthor: Maybe<(
    Pick<ContentfulAuthor, 'github' | 'nickName' | 'qiita' | 'twitter' | 'updatedAt' | 'id'>
    & { readonly avatarImage: Maybe<(
      Pick<ContentfulAsset, 'title'>
      & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url' | 'contentType'>> }
    )>, readonly description: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }>, readonly programmingLanguages: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }>, readonly myHobbies: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }>, readonly myWorks: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
  )> };

type PostsFromTopQueryVariables = Exact<{ [key: string]: never; }>;


type PostsFromTopQuery = { readonly author: Maybe<{ readonly avatar: Maybe<{ readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }> }>, readonly allContentfulMyPost: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulMyPost, 'title' | 'slug' | 'description' | 'publishDate'>
      & { readonly body: Maybe<(
        Pick<contentfulMyPostBodyTextNode, 'body'>
        & { readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'rawMarkdownBody'>> }
      )> }
    )> } };

type MyPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  previousPostSlug: Maybe<Scalars['String']>;
  nextPostSlug: Maybe<Scalars['String']>;
}>;


type MyPostBySlugQuery = { readonly author: Maybe<{ readonly avatar: Maybe<{ readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }> }>, readonly contentfulMyPost: Maybe<(
    Pick<ContentfulMyPost, 'slug' | 'title' | 'description' | 'publishDate'>
    & { rawDate: ContentfulMyPost['publishDate'] }
    & { readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
  )>, readonly previous: Maybe<Pick<ContentfulMyPost, 'slug' | 'title'>>, readonly next: Maybe<Pick<ContentfulMyPost, 'slug' | 'title'>> };

}