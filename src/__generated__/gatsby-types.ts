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
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
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

type ContentfulPerson = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly company: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly phone: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly github: Maybe<Scalars['String']>;
  readonly image: Maybe<ContentfulAsset>;
  readonly blog_post: Maybe<ReadonlyArray<Maybe<ContentfulBlogPost>>>;
  readonly shortBio: Maybe<contentfulPersonShortBioTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPersonSys>;
  /** Returns all children nodes filtered by type contentfulPersonShortBioTextNode */
  readonly childrenContentfulPersonShortBioTextNode: Maybe<ReadonlyArray<Maybe<contentfulPersonShortBioTextNode>>>;
  /** Returns the first child node of type contentfulPersonShortBioTextNode or null if there are no children of given type on this node */
  readonly childContentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulPerson_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPerson_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulPersonSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulPersonSysContentType>;
};

type ContentfulPersonSysContentType = {
  readonly sys: Maybe<ContentfulPersonSysContentTypeSys>;
};

type ContentfulPersonSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulBlogPost = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly publishDate: Maybe<Scalars['Date']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly heroImage: Maybe<ContentfulAsset>;
  readonly author: Maybe<ContentfulPerson>;
  readonly description: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly body: Maybe<contentfulBlogPostBodyTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulBlogPostSys>;
  /** Returns all children nodes filtered by type contentfulBlogPostDescriptionTextNode */
  readonly childrenContentfulBlogPostDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulBlogPostDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulBlogPostDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNode>;
  /** Returns all children nodes filtered by type contentfulBlogPostBodyTextNode */
  readonly childrenContentfulBlogPostBodyTextNode: Maybe<ReadonlyArray<Maybe<contentfulBlogPostBodyTextNode>>>;
  /** Returns the first child node of type contentfulBlogPostBodyTextNode or null if there are no children of given type on this node */
  readonly childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulBlogPost_publishDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulBlogPost_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulBlogPost_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulBlogPostSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulBlogPostSysContentType>;
};

type ContentfulBlogPostSysContentType = {
  readonly sys: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

type ContentfulBlogPostSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

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
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulAuthorSys>;
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
  readonly publishDate: Maybe<Scalars['Date']>;
  readonly body: Maybe<contentfulMyPostBodyTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulMyPostSys>;
  readonly description: Maybe<Scalars['String']>;
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

type contentfulPersonShortBioTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly shortBio: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulPersonShortBioTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulPersonShortBioTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
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

type contentfulBlogPostDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulBlogPostDescriptionTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulBlogPostDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulBlogPostBodyTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulBlogPostBodyTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulBlogPostBodyTextNodeSys = {
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
  readonly contentfulPerson: Maybe<ContentfulPerson>;
  readonly allContentfulPerson: ContentfulPersonConnection;
  readonly contentfulBlogPost: Maybe<ContentfulBlogPost>;
  readonly allContentfulBlogPost: ContentfulBlogPostConnection;
  readonly contentfulAuthor: Maybe<ContentfulAuthor>;
  readonly allContentfulAuthor: ContentfulAuthorConnection;
  readonly contentfulMyPost: Maybe<ContentfulMyPost>;
  readonly allContentfulMyPost: ContentfulMyPostConnection;
  readonly contentfulMyWork: Maybe<ContentfulMyWork>;
  readonly allContentfulMyWork: ContentfulMyWorkConnection;
  readonly contentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNode>;
  readonly allContentfulPersonShortBioTextNode: contentfulPersonShortBioTextNodeConnection;
  readonly contentfulMyWorkDescriptionTextNode: Maybe<contentfulMyWorkDescriptionTextNode>;
  readonly allContentfulMyWorkDescriptionTextNode: contentfulMyWorkDescriptionTextNodeConnection;
  readonly contentfulMyPostBodyTextNode: Maybe<contentfulMyPostBodyTextNode>;
  readonly allContentfulMyPostBodyTextNode: contentfulMyPostBodyTextNodeConnection;
  readonly contentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly allContentfulBlogPostDescriptionTextNode: contentfulBlogPostDescriptionTextNodeConnection;
  readonly contentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNode>;
  readonly allContentfulBlogPostBodyTextNode: contentfulBlogPostBodyTextNodeConnection;
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
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
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


type Query_contentfulPersonArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  company: Maybe<StringQueryOperatorInput>;
  email: Maybe<StringQueryOperatorInput>;
  phone: Maybe<StringQueryOperatorInput>;
  facebook: Maybe<StringQueryOperatorInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  github: Maybe<StringQueryOperatorInput>;
  image: Maybe<ContentfulAssetFilterInput>;
  blog_post: Maybe<ContentfulBlogPostFilterListInput>;
  shortBio: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPersonSysFilterInput>;
  childrenContentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNodeFilterListInput>;
  childContentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulPersonArgs = {
  filter: Maybe<ContentfulPersonFilterInput>;
  sort: Maybe<ContentfulPersonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBlogPostArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  publishDate: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  heroImage: Maybe<ContentfulAssetFilterInput>;
  author: Maybe<ContentfulPersonFilterInput>;
  description: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  body: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulBlogPostSysFilterInput>;
  childrenContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterListInput>;
  childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  childrenContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterListInput>;
  childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulBlogPostArgs = {
  filter: Maybe<ContentfulBlogPostFilterInput>;
  sort: Maybe<ContentfulBlogPostSortInput>;
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
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulAuthorSysFilterInput>;
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
  publishDate: Maybe<DateQueryOperatorInput>;
  body: Maybe<contentfulMyPostBodyTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulMyPostSysFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
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


type Query_contentfulPersonShortBioTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  shortBio: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulPersonShortBioTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulPersonShortBioTextNodeArgs = {
  filter: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
  sort: Maybe<contentfulPersonShortBioTextNodeSortInput>;
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


type Query_contentfulBlogPostDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulBlogPostDescriptionTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulBlogPostDescriptionTextNodeArgs = {
  filter: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulBlogPostDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulBlogPostBodyTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulBlogPostBodyTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulBlogPostBodyTextNodeArgs = {
  filter: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  sort: Maybe<contentfulBlogPostBodyTextNodeSortInput>;
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
  | 'port'
  | 'host'
  | 'pathPrefix'
  | 'polyfill'
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
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
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

type ContentfulBlogPostFilterListInput = {
  readonly elemMatch: Maybe<ContentfulBlogPostFilterInput>;
};

type ContentfulBlogPostFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly publishDate: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly heroImage: Maybe<ContentfulAssetFilterInput>;
  readonly author: Maybe<ContentfulPersonFilterInput>;
  readonly description: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  readonly body: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulBlogPostSysFilterInput>;
  readonly childrenContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterListInput>;
  readonly childContentfulBlogPostDescriptionTextNode: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
  readonly childrenContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterListInput>;
  readonly childContentfulBlogPostBodyTextNode: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulPersonFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly company: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly phone: Maybe<StringQueryOperatorInput>;
  readonly facebook: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly github: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFilterInput>;
  readonly blog_post: Maybe<ContentfulBlogPostFilterListInput>;
  readonly shortBio: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPersonSysFilterInput>;
  readonly childrenContentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNodeFilterListInput>;
  readonly childContentfulPersonShortBioTextNode: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type contentfulPersonShortBioTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly shortBio: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulPersonShortBioTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulPersonShortBioTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type ContentfulPersonSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPersonSysContentTypeFilterInput>;
};

type ContentfulPersonSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPersonSysContentTypeSysFilterInput>;
};

type ContentfulPersonSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulPersonShortBioTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulPersonShortBioTextNodeFilterInput>;
};

type contentfulBlogPostDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulBlogPostDescriptionTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulBlogPostDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type contentfulBlogPostBodyTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulBlogPostBodyTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulBlogPostBodyTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulBlogPostSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

type ContentfulBlogPostSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

type ContentfulBlogPostSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulBlogPostDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulBlogPostDescriptionTextNodeFilterInput>;
};

type contentfulBlogPostBodyTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulBlogPostBodyTextNodeFilterInput>;
};

type ContentfulPersonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPersonEdge>;
  readonly nodes: ReadonlyArray<ContentfulPerson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPersonGroupConnection>;
};


type ContentfulPersonConnection_distinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonConnection_maxArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonConnection_minArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonConnection_sumArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPersonFieldsEnum;
};

type ContentfulPersonEdge = {
  readonly next: Maybe<ContentfulPerson>;
  readonly node: ContentfulPerson;
  readonly previous: Maybe<ContentfulPerson>;
};

type ContentfulPersonFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'title'
  | 'company'
  | 'email'
  | 'phone'
  | 'facebook'
  | 'twitter'
  | 'github'
  | 'image.contentful_id'
  | 'image.id'
  | 'image.spaceId'
  | 'image.createdAt'
  | 'image.updatedAt'
  | 'image.file.url'
  | 'image.file.details.size'
  | 'image.file.fileName'
  | 'image.file.contentType'
  | 'image.title'
  | 'image.description'
  | 'image.node_locale'
  | 'image.sys.type'
  | 'image.sys.revision'
  | 'image.gatsbyImageData'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'blog_post'
  | 'blog_post.contentful_id'
  | 'blog_post.id'
  | 'blog_post.node_locale'
  | 'blog_post.title'
  | 'blog_post.slug'
  | 'blog_post.publishDate'
  | 'blog_post.tags'
  | 'blog_post.heroImage.contentful_id'
  | 'blog_post.heroImage.id'
  | 'blog_post.heroImage.spaceId'
  | 'blog_post.heroImage.createdAt'
  | 'blog_post.heroImage.updatedAt'
  | 'blog_post.heroImage.file.url'
  | 'blog_post.heroImage.file.fileName'
  | 'blog_post.heroImage.file.contentType'
  | 'blog_post.heroImage.title'
  | 'blog_post.heroImage.description'
  | 'blog_post.heroImage.node_locale'
  | 'blog_post.heroImage.sys.type'
  | 'blog_post.heroImage.sys.revision'
  | 'blog_post.heroImage.gatsbyImageData'
  | 'blog_post.heroImage.parent.id'
  | 'blog_post.heroImage.parent.children'
  | 'blog_post.heroImage.children'
  | 'blog_post.heroImage.children.id'
  | 'blog_post.heroImage.children.children'
  | 'blog_post.heroImage.internal.content'
  | 'blog_post.heroImage.internal.contentDigest'
  | 'blog_post.heroImage.internal.description'
  | 'blog_post.heroImage.internal.fieldOwners'
  | 'blog_post.heroImage.internal.ignoreType'
  | 'blog_post.heroImage.internal.mediaType'
  | 'blog_post.heroImage.internal.owner'
  | 'blog_post.heroImage.internal.type'
  | 'blog_post.author.contentful_id'
  | 'blog_post.author.id'
  | 'blog_post.author.node_locale'
  | 'blog_post.author.name'
  | 'blog_post.author.title'
  | 'blog_post.author.company'
  | 'blog_post.author.email'
  | 'blog_post.author.phone'
  | 'blog_post.author.facebook'
  | 'blog_post.author.twitter'
  | 'blog_post.author.github'
  | 'blog_post.author.image.contentful_id'
  | 'blog_post.author.image.id'
  | 'blog_post.author.image.spaceId'
  | 'blog_post.author.image.createdAt'
  | 'blog_post.author.image.updatedAt'
  | 'blog_post.author.image.title'
  | 'blog_post.author.image.description'
  | 'blog_post.author.image.node_locale'
  | 'blog_post.author.image.gatsbyImageData'
  | 'blog_post.author.image.children'
  | 'blog_post.author.blog_post'
  | 'blog_post.author.blog_post.contentful_id'
  | 'blog_post.author.blog_post.id'
  | 'blog_post.author.blog_post.node_locale'
  | 'blog_post.author.blog_post.title'
  | 'blog_post.author.blog_post.slug'
  | 'blog_post.author.blog_post.publishDate'
  | 'blog_post.author.blog_post.tags'
  | 'blog_post.author.blog_post.spaceId'
  | 'blog_post.author.blog_post.createdAt'
  | 'blog_post.author.blog_post.updatedAt'
  | 'blog_post.author.blog_post.childrenContentfulBlogPostDescriptionTextNode'
  | 'blog_post.author.blog_post.childrenContentfulBlogPostBodyTextNode'
  | 'blog_post.author.blog_post.children'
  | 'blog_post.author.shortBio.id'
  | 'blog_post.author.shortBio.children'
  | 'blog_post.author.shortBio.shortBio'
  | 'blog_post.author.shortBio.childrenMarkdownRemark'
  | 'blog_post.author.spaceId'
  | 'blog_post.author.createdAt'
  | 'blog_post.author.updatedAt'
  | 'blog_post.author.sys.type'
  | 'blog_post.author.sys.revision'
  | 'blog_post.author.childrenContentfulPersonShortBioTextNode'
  | 'blog_post.author.childrenContentfulPersonShortBioTextNode.id'
  | 'blog_post.author.childrenContentfulPersonShortBioTextNode.children'
  | 'blog_post.author.childrenContentfulPersonShortBioTextNode.shortBio'
  | 'blog_post.author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark'
  | 'blog_post.author.childContentfulPersonShortBioTextNode.id'
  | 'blog_post.author.childContentfulPersonShortBioTextNode.children'
  | 'blog_post.author.childContentfulPersonShortBioTextNode.shortBio'
  | 'blog_post.author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark'
  | 'blog_post.author.parent.id'
  | 'blog_post.author.parent.children'
  | 'blog_post.author.children'
  | 'blog_post.author.children.id'
  | 'blog_post.author.children.children'
  | 'blog_post.author.internal.content'
  | 'blog_post.author.internal.contentDigest'
  | 'blog_post.author.internal.description'
  | 'blog_post.author.internal.fieldOwners'
  | 'blog_post.author.internal.ignoreType'
  | 'blog_post.author.internal.mediaType'
  | 'blog_post.author.internal.owner'
  | 'blog_post.author.internal.type'
  | 'blog_post.description.id'
  | 'blog_post.description.parent.id'
  | 'blog_post.description.parent.children'
  | 'blog_post.description.children'
  | 'blog_post.description.children.id'
  | 'blog_post.description.children.children'
  | 'blog_post.description.internal.content'
  | 'blog_post.description.internal.contentDigest'
  | 'blog_post.description.internal.description'
  | 'blog_post.description.internal.fieldOwners'
  | 'blog_post.description.internal.ignoreType'
  | 'blog_post.description.internal.mediaType'
  | 'blog_post.description.internal.owner'
  | 'blog_post.description.internal.type'
  | 'blog_post.description.description'
  | 'blog_post.description.sys.type'
  | 'blog_post.description.childrenMarkdownRemark'
  | 'blog_post.description.childrenMarkdownRemark.id'
  | 'blog_post.description.childrenMarkdownRemark.excerpt'
  | 'blog_post.description.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.description.childrenMarkdownRemark.html'
  | 'blog_post.description.childrenMarkdownRemark.htmlAst'
  | 'blog_post.description.childrenMarkdownRemark.excerptAst'
  | 'blog_post.description.childrenMarkdownRemark.headings'
  | 'blog_post.description.childrenMarkdownRemark.timeToRead'
  | 'blog_post.description.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.description.childrenMarkdownRemark.children'
  | 'blog_post.description.childMarkdownRemark.id'
  | 'blog_post.description.childMarkdownRemark.excerpt'
  | 'blog_post.description.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.description.childMarkdownRemark.html'
  | 'blog_post.description.childMarkdownRemark.htmlAst'
  | 'blog_post.description.childMarkdownRemark.excerptAst'
  | 'blog_post.description.childMarkdownRemark.headings'
  | 'blog_post.description.childMarkdownRemark.timeToRead'
  | 'blog_post.description.childMarkdownRemark.tableOfContents'
  | 'blog_post.description.childMarkdownRemark.children'
  | 'blog_post.body.id'
  | 'blog_post.body.parent.id'
  | 'blog_post.body.parent.children'
  | 'blog_post.body.children'
  | 'blog_post.body.children.id'
  | 'blog_post.body.children.children'
  | 'blog_post.body.internal.content'
  | 'blog_post.body.internal.contentDigest'
  | 'blog_post.body.internal.description'
  | 'blog_post.body.internal.fieldOwners'
  | 'blog_post.body.internal.ignoreType'
  | 'blog_post.body.internal.mediaType'
  | 'blog_post.body.internal.owner'
  | 'blog_post.body.internal.type'
  | 'blog_post.body.body'
  | 'blog_post.body.sys.type'
  | 'blog_post.body.childrenMarkdownRemark'
  | 'blog_post.body.childrenMarkdownRemark.id'
  | 'blog_post.body.childrenMarkdownRemark.excerpt'
  | 'blog_post.body.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.body.childrenMarkdownRemark.html'
  | 'blog_post.body.childrenMarkdownRemark.htmlAst'
  | 'blog_post.body.childrenMarkdownRemark.excerptAst'
  | 'blog_post.body.childrenMarkdownRemark.headings'
  | 'blog_post.body.childrenMarkdownRemark.timeToRead'
  | 'blog_post.body.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.body.childrenMarkdownRemark.children'
  | 'blog_post.body.childMarkdownRemark.id'
  | 'blog_post.body.childMarkdownRemark.excerpt'
  | 'blog_post.body.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.body.childMarkdownRemark.html'
  | 'blog_post.body.childMarkdownRemark.htmlAst'
  | 'blog_post.body.childMarkdownRemark.excerptAst'
  | 'blog_post.body.childMarkdownRemark.headings'
  | 'blog_post.body.childMarkdownRemark.timeToRead'
  | 'blog_post.body.childMarkdownRemark.tableOfContents'
  | 'blog_post.body.childMarkdownRemark.children'
  | 'blog_post.spaceId'
  | 'blog_post.createdAt'
  | 'blog_post.updatedAt'
  | 'blog_post.sys.type'
  | 'blog_post.sys.revision'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.parent.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.parent.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.children.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.content'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.contentDigest'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.description'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.ignoreType'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.mediaType'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.owner'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.internal.type'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.description'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.sys.type'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.parent.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.children.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.children.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.content'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.contentDigest'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.description'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.ignoreType'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.mediaType'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.owner'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.internal.type'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.description'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.sys.type'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.parent.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.parent.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.children.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.children.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.content'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.contentDigest'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.description'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.fieldOwners'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.ignoreType'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.mediaType'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.owner'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.internal.type'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.body'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.sys.type'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.parent.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.parent.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.children.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.children.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.content'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.contentDigest'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.description'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.fieldOwners'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.ignoreType'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.mediaType'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.owner'
  | 'blog_post.childContentfulBlogPostBodyTextNode.internal.type'
  | 'blog_post.childContentfulBlogPostBodyTextNode.body'
  | 'blog_post.childContentfulBlogPostBodyTextNode.sys.type'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'blog_post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'blog_post.parent.id'
  | 'blog_post.parent.parent.id'
  | 'blog_post.parent.parent.children'
  | 'blog_post.parent.children'
  | 'blog_post.parent.children.id'
  | 'blog_post.parent.children.children'
  | 'blog_post.parent.internal.content'
  | 'blog_post.parent.internal.contentDigest'
  | 'blog_post.parent.internal.description'
  | 'blog_post.parent.internal.fieldOwners'
  | 'blog_post.parent.internal.ignoreType'
  | 'blog_post.parent.internal.mediaType'
  | 'blog_post.parent.internal.owner'
  | 'blog_post.parent.internal.type'
  | 'blog_post.children'
  | 'blog_post.children.id'
  | 'blog_post.children.parent.id'
  | 'blog_post.children.parent.children'
  | 'blog_post.children.children'
  | 'blog_post.children.children.id'
  | 'blog_post.children.children.children'
  | 'blog_post.children.internal.content'
  | 'blog_post.children.internal.contentDigest'
  | 'blog_post.children.internal.description'
  | 'blog_post.children.internal.fieldOwners'
  | 'blog_post.children.internal.ignoreType'
  | 'blog_post.children.internal.mediaType'
  | 'blog_post.children.internal.owner'
  | 'blog_post.children.internal.type'
  | 'blog_post.internal.content'
  | 'blog_post.internal.contentDigest'
  | 'blog_post.internal.description'
  | 'blog_post.internal.fieldOwners'
  | 'blog_post.internal.ignoreType'
  | 'blog_post.internal.mediaType'
  | 'blog_post.internal.owner'
  | 'blog_post.internal.type'
  | 'shortBio.id'
  | 'shortBio.parent.id'
  | 'shortBio.parent.parent.id'
  | 'shortBio.parent.parent.children'
  | 'shortBio.parent.children'
  | 'shortBio.parent.children.id'
  | 'shortBio.parent.children.children'
  | 'shortBio.parent.internal.content'
  | 'shortBio.parent.internal.contentDigest'
  | 'shortBio.parent.internal.description'
  | 'shortBio.parent.internal.fieldOwners'
  | 'shortBio.parent.internal.ignoreType'
  | 'shortBio.parent.internal.mediaType'
  | 'shortBio.parent.internal.owner'
  | 'shortBio.parent.internal.type'
  | 'shortBio.children'
  | 'shortBio.children.id'
  | 'shortBio.children.parent.id'
  | 'shortBio.children.parent.children'
  | 'shortBio.children.children'
  | 'shortBio.children.children.id'
  | 'shortBio.children.children.children'
  | 'shortBio.children.internal.content'
  | 'shortBio.children.internal.contentDigest'
  | 'shortBio.children.internal.description'
  | 'shortBio.children.internal.fieldOwners'
  | 'shortBio.children.internal.ignoreType'
  | 'shortBio.children.internal.mediaType'
  | 'shortBio.children.internal.owner'
  | 'shortBio.children.internal.type'
  | 'shortBio.internal.content'
  | 'shortBio.internal.contentDigest'
  | 'shortBio.internal.description'
  | 'shortBio.internal.fieldOwners'
  | 'shortBio.internal.ignoreType'
  | 'shortBio.internal.mediaType'
  | 'shortBio.internal.owner'
  | 'shortBio.internal.type'
  | 'shortBio.shortBio'
  | 'shortBio.sys.type'
  | 'shortBio.childrenMarkdownRemark'
  | 'shortBio.childrenMarkdownRemark.id'
  | 'shortBio.childrenMarkdownRemark.frontmatter.title'
  | 'shortBio.childrenMarkdownRemark.excerpt'
  | 'shortBio.childrenMarkdownRemark.rawMarkdownBody'
  | 'shortBio.childrenMarkdownRemark.html'
  | 'shortBio.childrenMarkdownRemark.htmlAst'
  | 'shortBio.childrenMarkdownRemark.excerptAst'
  | 'shortBio.childrenMarkdownRemark.headings'
  | 'shortBio.childrenMarkdownRemark.headings.id'
  | 'shortBio.childrenMarkdownRemark.headings.value'
  | 'shortBio.childrenMarkdownRemark.headings.depth'
  | 'shortBio.childrenMarkdownRemark.timeToRead'
  | 'shortBio.childrenMarkdownRemark.tableOfContents'
  | 'shortBio.childrenMarkdownRemark.wordCount.paragraphs'
  | 'shortBio.childrenMarkdownRemark.wordCount.sentences'
  | 'shortBio.childrenMarkdownRemark.wordCount.words'
  | 'shortBio.childrenMarkdownRemark.parent.id'
  | 'shortBio.childrenMarkdownRemark.parent.children'
  | 'shortBio.childrenMarkdownRemark.children'
  | 'shortBio.childrenMarkdownRemark.children.id'
  | 'shortBio.childrenMarkdownRemark.children.children'
  | 'shortBio.childrenMarkdownRemark.internal.content'
  | 'shortBio.childrenMarkdownRemark.internal.contentDigest'
  | 'shortBio.childrenMarkdownRemark.internal.description'
  | 'shortBio.childrenMarkdownRemark.internal.fieldOwners'
  | 'shortBio.childrenMarkdownRemark.internal.ignoreType'
  | 'shortBio.childrenMarkdownRemark.internal.mediaType'
  | 'shortBio.childrenMarkdownRemark.internal.owner'
  | 'shortBio.childrenMarkdownRemark.internal.type'
  | 'shortBio.childMarkdownRemark.id'
  | 'shortBio.childMarkdownRemark.frontmatter.title'
  | 'shortBio.childMarkdownRemark.excerpt'
  | 'shortBio.childMarkdownRemark.rawMarkdownBody'
  | 'shortBio.childMarkdownRemark.html'
  | 'shortBio.childMarkdownRemark.htmlAst'
  | 'shortBio.childMarkdownRemark.excerptAst'
  | 'shortBio.childMarkdownRemark.headings'
  | 'shortBio.childMarkdownRemark.headings.id'
  | 'shortBio.childMarkdownRemark.headings.value'
  | 'shortBio.childMarkdownRemark.headings.depth'
  | 'shortBio.childMarkdownRemark.timeToRead'
  | 'shortBio.childMarkdownRemark.tableOfContents'
  | 'shortBio.childMarkdownRemark.wordCount.paragraphs'
  | 'shortBio.childMarkdownRemark.wordCount.sentences'
  | 'shortBio.childMarkdownRemark.wordCount.words'
  | 'shortBio.childMarkdownRemark.parent.id'
  | 'shortBio.childMarkdownRemark.parent.children'
  | 'shortBio.childMarkdownRemark.children'
  | 'shortBio.childMarkdownRemark.children.id'
  | 'shortBio.childMarkdownRemark.children.children'
  | 'shortBio.childMarkdownRemark.internal.content'
  | 'shortBio.childMarkdownRemark.internal.contentDigest'
  | 'shortBio.childMarkdownRemark.internal.description'
  | 'shortBio.childMarkdownRemark.internal.fieldOwners'
  | 'shortBio.childMarkdownRemark.internal.ignoreType'
  | 'shortBio.childMarkdownRemark.internal.mediaType'
  | 'shortBio.childMarkdownRemark.internal.owner'
  | 'shortBio.childMarkdownRemark.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulPersonShortBioTextNode'
  | 'childrenContentfulPersonShortBioTextNode.id'
  | 'childrenContentfulPersonShortBioTextNode.parent.id'
  | 'childrenContentfulPersonShortBioTextNode.parent.parent.id'
  | 'childrenContentfulPersonShortBioTextNode.parent.parent.children'
  | 'childrenContentfulPersonShortBioTextNode.parent.children'
  | 'childrenContentfulPersonShortBioTextNode.parent.children.id'
  | 'childrenContentfulPersonShortBioTextNode.parent.children.children'
  | 'childrenContentfulPersonShortBioTextNode.parent.internal.content'
  | 'childrenContentfulPersonShortBioTextNode.parent.internal.contentDigest'
  | 'childrenContentfulPersonShortBioTextNode.parent.internal.description'
  | 'childrenContentfulPersonShortBioTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulPersonShortBioTextNode.parent.internal.ignoreType'
  | 'childrenContentfulPersonShortBioTextNode.parent.internal.mediaType'
  | 'childrenContentfulPersonShortBioTextNode.parent.internal.owner'
  | 'childrenContentfulPersonShortBioTextNode.parent.internal.type'
  | 'childrenContentfulPersonShortBioTextNode.children'
  | 'childrenContentfulPersonShortBioTextNode.children.id'
  | 'childrenContentfulPersonShortBioTextNode.children.parent.id'
  | 'childrenContentfulPersonShortBioTextNode.children.parent.children'
  | 'childrenContentfulPersonShortBioTextNode.children.children'
  | 'childrenContentfulPersonShortBioTextNode.children.children.id'
  | 'childrenContentfulPersonShortBioTextNode.children.children.children'
  | 'childrenContentfulPersonShortBioTextNode.children.internal.content'
  | 'childrenContentfulPersonShortBioTextNode.children.internal.contentDigest'
  | 'childrenContentfulPersonShortBioTextNode.children.internal.description'
  | 'childrenContentfulPersonShortBioTextNode.children.internal.fieldOwners'
  | 'childrenContentfulPersonShortBioTextNode.children.internal.ignoreType'
  | 'childrenContentfulPersonShortBioTextNode.children.internal.mediaType'
  | 'childrenContentfulPersonShortBioTextNode.children.internal.owner'
  | 'childrenContentfulPersonShortBioTextNode.children.internal.type'
  | 'childrenContentfulPersonShortBioTextNode.internal.content'
  | 'childrenContentfulPersonShortBioTextNode.internal.contentDigest'
  | 'childrenContentfulPersonShortBioTextNode.internal.description'
  | 'childrenContentfulPersonShortBioTextNode.internal.fieldOwners'
  | 'childrenContentfulPersonShortBioTextNode.internal.ignoreType'
  | 'childrenContentfulPersonShortBioTextNode.internal.mediaType'
  | 'childrenContentfulPersonShortBioTextNode.internal.owner'
  | 'childrenContentfulPersonShortBioTextNode.internal.type'
  | 'childrenContentfulPersonShortBioTextNode.shortBio'
  | 'childrenContentfulPersonShortBioTextNode.sys.type'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.id'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.html'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.children'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulPersonShortBioTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulPersonShortBioTextNode.id'
  | 'childContentfulPersonShortBioTextNode.parent.id'
  | 'childContentfulPersonShortBioTextNode.parent.parent.id'
  | 'childContentfulPersonShortBioTextNode.parent.parent.children'
  | 'childContentfulPersonShortBioTextNode.parent.children'
  | 'childContentfulPersonShortBioTextNode.parent.children.id'
  | 'childContentfulPersonShortBioTextNode.parent.children.children'
  | 'childContentfulPersonShortBioTextNode.parent.internal.content'
  | 'childContentfulPersonShortBioTextNode.parent.internal.contentDigest'
  | 'childContentfulPersonShortBioTextNode.parent.internal.description'
  | 'childContentfulPersonShortBioTextNode.parent.internal.fieldOwners'
  | 'childContentfulPersonShortBioTextNode.parent.internal.ignoreType'
  | 'childContentfulPersonShortBioTextNode.parent.internal.mediaType'
  | 'childContentfulPersonShortBioTextNode.parent.internal.owner'
  | 'childContentfulPersonShortBioTextNode.parent.internal.type'
  | 'childContentfulPersonShortBioTextNode.children'
  | 'childContentfulPersonShortBioTextNode.children.id'
  | 'childContentfulPersonShortBioTextNode.children.parent.id'
  | 'childContentfulPersonShortBioTextNode.children.parent.children'
  | 'childContentfulPersonShortBioTextNode.children.children'
  | 'childContentfulPersonShortBioTextNode.children.children.id'
  | 'childContentfulPersonShortBioTextNode.children.children.children'
  | 'childContentfulPersonShortBioTextNode.children.internal.content'
  | 'childContentfulPersonShortBioTextNode.children.internal.contentDigest'
  | 'childContentfulPersonShortBioTextNode.children.internal.description'
  | 'childContentfulPersonShortBioTextNode.children.internal.fieldOwners'
  | 'childContentfulPersonShortBioTextNode.children.internal.ignoreType'
  | 'childContentfulPersonShortBioTextNode.children.internal.mediaType'
  | 'childContentfulPersonShortBioTextNode.children.internal.owner'
  | 'childContentfulPersonShortBioTextNode.children.internal.type'
  | 'childContentfulPersonShortBioTextNode.internal.content'
  | 'childContentfulPersonShortBioTextNode.internal.contentDigest'
  | 'childContentfulPersonShortBioTextNode.internal.description'
  | 'childContentfulPersonShortBioTextNode.internal.fieldOwners'
  | 'childContentfulPersonShortBioTextNode.internal.ignoreType'
  | 'childContentfulPersonShortBioTextNode.internal.mediaType'
  | 'childContentfulPersonShortBioTextNode.internal.owner'
  | 'childContentfulPersonShortBioTextNode.internal.type'
  | 'childContentfulPersonShortBioTextNode.shortBio'
  | 'childContentfulPersonShortBioTextNode.sys.type'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulPersonShortBioTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.id'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.html'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.children'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.children.id'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.children.children'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulPersonShortBioTextNode.childMarkdownRemark.internal.type'
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

type ContentfulPersonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPersonEdge>;
  readonly nodes: ReadonlyArray<ContentfulPerson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPersonGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulPersonGroupConnection_distinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonGroupConnection_maxArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonGroupConnection_minArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonGroupConnection_sumArgs = {
  field: ContentfulPersonFieldsEnum;
};


type ContentfulPersonGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPersonFieldsEnum;
};

type ContentfulPersonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPersonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulBlogPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulBlogPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulBlogPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulBlogPostGroupConnection>;
};


type ContentfulBlogPostConnection_distinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostConnection_maxArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostConnection_minArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostConnection_sumArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

type ContentfulBlogPostEdge = {
  readonly next: Maybe<ContentfulBlogPost>;
  readonly node: ContentfulBlogPost;
  readonly previous: Maybe<ContentfulBlogPost>;
};

type ContentfulBlogPostFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'publishDate'
  | 'tags'
  | 'heroImage.contentful_id'
  | 'heroImage.id'
  | 'heroImage.spaceId'
  | 'heroImage.createdAt'
  | 'heroImage.updatedAt'
  | 'heroImage.file.url'
  | 'heroImage.file.details.size'
  | 'heroImage.file.fileName'
  | 'heroImage.file.contentType'
  | 'heroImage.title'
  | 'heroImage.description'
  | 'heroImage.node_locale'
  | 'heroImage.sys.type'
  | 'heroImage.sys.revision'
  | 'heroImage.gatsbyImageData'
  | 'heroImage.parent.id'
  | 'heroImage.parent.parent.id'
  | 'heroImage.parent.parent.children'
  | 'heroImage.parent.children'
  | 'heroImage.parent.children.id'
  | 'heroImage.parent.children.children'
  | 'heroImage.parent.internal.content'
  | 'heroImage.parent.internal.contentDigest'
  | 'heroImage.parent.internal.description'
  | 'heroImage.parent.internal.fieldOwners'
  | 'heroImage.parent.internal.ignoreType'
  | 'heroImage.parent.internal.mediaType'
  | 'heroImage.parent.internal.owner'
  | 'heroImage.parent.internal.type'
  | 'heroImage.children'
  | 'heroImage.children.id'
  | 'heroImage.children.parent.id'
  | 'heroImage.children.parent.children'
  | 'heroImage.children.children'
  | 'heroImage.children.children.id'
  | 'heroImage.children.children.children'
  | 'heroImage.children.internal.content'
  | 'heroImage.children.internal.contentDigest'
  | 'heroImage.children.internal.description'
  | 'heroImage.children.internal.fieldOwners'
  | 'heroImage.children.internal.ignoreType'
  | 'heroImage.children.internal.mediaType'
  | 'heroImage.children.internal.owner'
  | 'heroImage.children.internal.type'
  | 'heroImage.internal.content'
  | 'heroImage.internal.contentDigest'
  | 'heroImage.internal.description'
  | 'heroImage.internal.fieldOwners'
  | 'heroImage.internal.ignoreType'
  | 'heroImage.internal.mediaType'
  | 'heroImage.internal.owner'
  | 'heroImage.internal.type'
  | 'author.contentful_id'
  | 'author.id'
  | 'author.node_locale'
  | 'author.name'
  | 'author.title'
  | 'author.company'
  | 'author.email'
  | 'author.phone'
  | 'author.facebook'
  | 'author.twitter'
  | 'author.github'
  | 'author.image.contentful_id'
  | 'author.image.id'
  | 'author.image.spaceId'
  | 'author.image.createdAt'
  | 'author.image.updatedAt'
  | 'author.image.file.url'
  | 'author.image.file.fileName'
  | 'author.image.file.contentType'
  | 'author.image.title'
  | 'author.image.description'
  | 'author.image.node_locale'
  | 'author.image.sys.type'
  | 'author.image.sys.revision'
  | 'author.image.gatsbyImageData'
  | 'author.image.parent.id'
  | 'author.image.parent.children'
  | 'author.image.children'
  | 'author.image.children.id'
  | 'author.image.children.children'
  | 'author.image.internal.content'
  | 'author.image.internal.contentDigest'
  | 'author.image.internal.description'
  | 'author.image.internal.fieldOwners'
  | 'author.image.internal.ignoreType'
  | 'author.image.internal.mediaType'
  | 'author.image.internal.owner'
  | 'author.image.internal.type'
  | 'author.blog_post'
  | 'author.blog_post.contentful_id'
  | 'author.blog_post.id'
  | 'author.blog_post.node_locale'
  | 'author.blog_post.title'
  | 'author.blog_post.slug'
  | 'author.blog_post.publishDate'
  | 'author.blog_post.tags'
  | 'author.blog_post.heroImage.contentful_id'
  | 'author.blog_post.heroImage.id'
  | 'author.blog_post.heroImage.spaceId'
  | 'author.blog_post.heroImage.createdAt'
  | 'author.blog_post.heroImage.updatedAt'
  | 'author.blog_post.heroImage.title'
  | 'author.blog_post.heroImage.description'
  | 'author.blog_post.heroImage.node_locale'
  | 'author.blog_post.heroImage.gatsbyImageData'
  | 'author.blog_post.heroImage.children'
  | 'author.blog_post.author.contentful_id'
  | 'author.blog_post.author.id'
  | 'author.blog_post.author.node_locale'
  | 'author.blog_post.author.name'
  | 'author.blog_post.author.title'
  | 'author.blog_post.author.company'
  | 'author.blog_post.author.email'
  | 'author.blog_post.author.phone'
  | 'author.blog_post.author.facebook'
  | 'author.blog_post.author.twitter'
  | 'author.blog_post.author.github'
  | 'author.blog_post.author.blog_post'
  | 'author.blog_post.author.spaceId'
  | 'author.blog_post.author.createdAt'
  | 'author.blog_post.author.updatedAt'
  | 'author.blog_post.author.childrenContentfulPersonShortBioTextNode'
  | 'author.blog_post.author.children'
  | 'author.blog_post.description.id'
  | 'author.blog_post.description.children'
  | 'author.blog_post.description.description'
  | 'author.blog_post.description.childrenMarkdownRemark'
  | 'author.blog_post.body.id'
  | 'author.blog_post.body.children'
  | 'author.blog_post.body.body'
  | 'author.blog_post.body.childrenMarkdownRemark'
  | 'author.blog_post.spaceId'
  | 'author.blog_post.createdAt'
  | 'author.blog_post.updatedAt'
  | 'author.blog_post.sys.type'
  | 'author.blog_post.sys.revision'
  | 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode'
  | 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.id'
  | 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.children'
  | 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.description'
  | 'author.blog_post.childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'author.blog_post.childContentfulBlogPostDescriptionTextNode.id'
  | 'author.blog_post.childContentfulBlogPostDescriptionTextNode.children'
  | 'author.blog_post.childContentfulBlogPostDescriptionTextNode.description'
  | 'author.blog_post.childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'author.blog_post.childrenContentfulBlogPostBodyTextNode'
  | 'author.blog_post.childrenContentfulBlogPostBodyTextNode.id'
  | 'author.blog_post.childrenContentfulBlogPostBodyTextNode.children'
  | 'author.blog_post.childrenContentfulBlogPostBodyTextNode.body'
  | 'author.blog_post.childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'author.blog_post.childContentfulBlogPostBodyTextNode.id'
  | 'author.blog_post.childContentfulBlogPostBodyTextNode.children'
  | 'author.blog_post.childContentfulBlogPostBodyTextNode.body'
  | 'author.blog_post.childContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'author.blog_post.parent.id'
  | 'author.blog_post.parent.children'
  | 'author.blog_post.children'
  | 'author.blog_post.children.id'
  | 'author.blog_post.children.children'
  | 'author.blog_post.internal.content'
  | 'author.blog_post.internal.contentDigest'
  | 'author.blog_post.internal.description'
  | 'author.blog_post.internal.fieldOwners'
  | 'author.blog_post.internal.ignoreType'
  | 'author.blog_post.internal.mediaType'
  | 'author.blog_post.internal.owner'
  | 'author.blog_post.internal.type'
  | 'author.shortBio.id'
  | 'author.shortBio.parent.id'
  | 'author.shortBio.parent.children'
  | 'author.shortBio.children'
  | 'author.shortBio.children.id'
  | 'author.shortBio.children.children'
  | 'author.shortBio.internal.content'
  | 'author.shortBio.internal.contentDigest'
  | 'author.shortBio.internal.description'
  | 'author.shortBio.internal.fieldOwners'
  | 'author.shortBio.internal.ignoreType'
  | 'author.shortBio.internal.mediaType'
  | 'author.shortBio.internal.owner'
  | 'author.shortBio.internal.type'
  | 'author.shortBio.shortBio'
  | 'author.shortBio.sys.type'
  | 'author.shortBio.childrenMarkdownRemark'
  | 'author.shortBio.childrenMarkdownRemark.id'
  | 'author.shortBio.childrenMarkdownRemark.excerpt'
  | 'author.shortBio.childrenMarkdownRemark.rawMarkdownBody'
  | 'author.shortBio.childrenMarkdownRemark.html'
  | 'author.shortBio.childrenMarkdownRemark.htmlAst'
  | 'author.shortBio.childrenMarkdownRemark.excerptAst'
  | 'author.shortBio.childrenMarkdownRemark.headings'
  | 'author.shortBio.childrenMarkdownRemark.timeToRead'
  | 'author.shortBio.childrenMarkdownRemark.tableOfContents'
  | 'author.shortBio.childrenMarkdownRemark.children'
  | 'author.shortBio.childMarkdownRemark.id'
  | 'author.shortBio.childMarkdownRemark.excerpt'
  | 'author.shortBio.childMarkdownRemark.rawMarkdownBody'
  | 'author.shortBio.childMarkdownRemark.html'
  | 'author.shortBio.childMarkdownRemark.htmlAst'
  | 'author.shortBio.childMarkdownRemark.excerptAst'
  | 'author.shortBio.childMarkdownRemark.headings'
  | 'author.shortBio.childMarkdownRemark.timeToRead'
  | 'author.shortBio.childMarkdownRemark.tableOfContents'
  | 'author.shortBio.childMarkdownRemark.children'
  | 'author.spaceId'
  | 'author.createdAt'
  | 'author.updatedAt'
  | 'author.sys.type'
  | 'author.sys.revision'
  | 'author.childrenContentfulPersonShortBioTextNode'
  | 'author.childrenContentfulPersonShortBioTextNode.id'
  | 'author.childrenContentfulPersonShortBioTextNode.parent.id'
  | 'author.childrenContentfulPersonShortBioTextNode.parent.children'
  | 'author.childrenContentfulPersonShortBioTextNode.children'
  | 'author.childrenContentfulPersonShortBioTextNode.children.id'
  | 'author.childrenContentfulPersonShortBioTextNode.children.children'
  | 'author.childrenContentfulPersonShortBioTextNode.internal.content'
  | 'author.childrenContentfulPersonShortBioTextNode.internal.contentDigest'
  | 'author.childrenContentfulPersonShortBioTextNode.internal.description'
  | 'author.childrenContentfulPersonShortBioTextNode.internal.fieldOwners'
  | 'author.childrenContentfulPersonShortBioTextNode.internal.ignoreType'
  | 'author.childrenContentfulPersonShortBioTextNode.internal.mediaType'
  | 'author.childrenContentfulPersonShortBioTextNode.internal.owner'
  | 'author.childrenContentfulPersonShortBioTextNode.internal.type'
  | 'author.childrenContentfulPersonShortBioTextNode.shortBio'
  | 'author.childrenContentfulPersonShortBioTextNode.sys.type'
  | 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark'
  | 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'author.childrenContentfulPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.id'
  | 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.html'
  | 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'author.childrenContentfulPersonShortBioTextNode.childMarkdownRemark.children'
  | 'author.childContentfulPersonShortBioTextNode.id'
  | 'author.childContentfulPersonShortBioTextNode.parent.id'
  | 'author.childContentfulPersonShortBioTextNode.parent.children'
  | 'author.childContentfulPersonShortBioTextNode.children'
  | 'author.childContentfulPersonShortBioTextNode.children.id'
  | 'author.childContentfulPersonShortBioTextNode.children.children'
  | 'author.childContentfulPersonShortBioTextNode.internal.content'
  | 'author.childContentfulPersonShortBioTextNode.internal.contentDigest'
  | 'author.childContentfulPersonShortBioTextNode.internal.description'
  | 'author.childContentfulPersonShortBioTextNode.internal.fieldOwners'
  | 'author.childContentfulPersonShortBioTextNode.internal.ignoreType'
  | 'author.childContentfulPersonShortBioTextNode.internal.mediaType'
  | 'author.childContentfulPersonShortBioTextNode.internal.owner'
  | 'author.childContentfulPersonShortBioTextNode.internal.type'
  | 'author.childContentfulPersonShortBioTextNode.shortBio'
  | 'author.childContentfulPersonShortBioTextNode.sys.type'
  | 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark'
  | 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'author.childContentfulPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.id'
  | 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.html'
  | 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'author.childContentfulPersonShortBioTextNode.childMarkdownRemark.children'
  | 'author.parent.id'
  | 'author.parent.parent.id'
  | 'author.parent.parent.children'
  | 'author.parent.children'
  | 'author.parent.children.id'
  | 'author.parent.children.children'
  | 'author.parent.internal.content'
  | 'author.parent.internal.contentDigest'
  | 'author.parent.internal.description'
  | 'author.parent.internal.fieldOwners'
  | 'author.parent.internal.ignoreType'
  | 'author.parent.internal.mediaType'
  | 'author.parent.internal.owner'
  | 'author.parent.internal.type'
  | 'author.children'
  | 'author.children.id'
  | 'author.children.parent.id'
  | 'author.children.parent.children'
  | 'author.children.children'
  | 'author.children.children.id'
  | 'author.children.children.children'
  | 'author.children.internal.content'
  | 'author.children.internal.contentDigest'
  | 'author.children.internal.description'
  | 'author.children.internal.fieldOwners'
  | 'author.children.internal.ignoreType'
  | 'author.children.internal.mediaType'
  | 'author.children.internal.owner'
  | 'author.children.internal.type'
  | 'author.internal.content'
  | 'author.internal.contentDigest'
  | 'author.internal.description'
  | 'author.internal.fieldOwners'
  | 'author.internal.ignoreType'
  | 'author.internal.mediaType'
  | 'author.internal.owner'
  | 'author.internal.type'
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
  | 'childrenContentfulBlogPostDescriptionTextNode'
  | 'childrenContentfulBlogPostDescriptionTextNode.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.children.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.children.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulBlogPostDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulBlogPostDescriptionTextNode.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.parent.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.parent.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.children.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.children.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.content'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulBlogPostDescriptionTextNode.children.internal.type'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.content'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.owner'
  | 'childrenContentfulBlogPostDescriptionTextNode.internal.type'
  | 'childrenContentfulBlogPostDescriptionTextNode.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.sys.type'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulBlogPostDescriptionTextNode.id'
  | 'childContentfulBlogPostDescriptionTextNode.parent.id'
  | 'childContentfulBlogPostDescriptionTextNode.parent.parent.id'
  | 'childContentfulBlogPostDescriptionTextNode.parent.parent.children'
  | 'childContentfulBlogPostDescriptionTextNode.parent.children'
  | 'childContentfulBlogPostDescriptionTextNode.parent.children.id'
  | 'childContentfulBlogPostDescriptionTextNode.parent.children.children'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.content'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.description'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.owner'
  | 'childContentfulBlogPostDescriptionTextNode.parent.internal.type'
  | 'childContentfulBlogPostDescriptionTextNode.children'
  | 'childContentfulBlogPostDescriptionTextNode.children.id'
  | 'childContentfulBlogPostDescriptionTextNode.children.parent.id'
  | 'childContentfulBlogPostDescriptionTextNode.children.parent.children'
  | 'childContentfulBlogPostDescriptionTextNode.children.children'
  | 'childContentfulBlogPostDescriptionTextNode.children.children.id'
  | 'childContentfulBlogPostDescriptionTextNode.children.children.children'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.content'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.description'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.owner'
  | 'childContentfulBlogPostDescriptionTextNode.children.internal.type'
  | 'childContentfulBlogPostDescriptionTextNode.internal.content'
  | 'childContentfulBlogPostDescriptionTextNode.internal.contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode.internal.description'
  | 'childContentfulBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode.internal.ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode.internal.mediaType'
  | 'childContentfulBlogPostDescriptionTextNode.internal.owner'
  | 'childContentfulBlogPostDescriptionTextNode.internal.type'
  | 'childContentfulBlogPostDescriptionTextNode.description'
  | 'childContentfulBlogPostDescriptionTextNode.sys.type'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulBlogPostDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'childrenContentfulBlogPostBodyTextNode'
  | 'childrenContentfulBlogPostBodyTextNode.id'
  | 'childrenContentfulBlogPostBodyTextNode.parent.id'
  | 'childrenContentfulBlogPostBodyTextNode.parent.parent.id'
  | 'childrenContentfulBlogPostBodyTextNode.parent.parent.children'
  | 'childrenContentfulBlogPostBodyTextNode.parent.children'
  | 'childrenContentfulBlogPostBodyTextNode.parent.children.id'
  | 'childrenContentfulBlogPostBodyTextNode.parent.children.children'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.content'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.contentDigest'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.description'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.ignoreType'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.mediaType'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.owner'
  | 'childrenContentfulBlogPostBodyTextNode.parent.internal.type'
  | 'childrenContentfulBlogPostBodyTextNode.children'
  | 'childrenContentfulBlogPostBodyTextNode.children.id'
  | 'childrenContentfulBlogPostBodyTextNode.children.parent.id'
  | 'childrenContentfulBlogPostBodyTextNode.children.parent.children'
  | 'childrenContentfulBlogPostBodyTextNode.children.children'
  | 'childrenContentfulBlogPostBodyTextNode.children.children.id'
  | 'childrenContentfulBlogPostBodyTextNode.children.children.children'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.content'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.contentDigest'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.description'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.fieldOwners'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.ignoreType'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.mediaType'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.owner'
  | 'childrenContentfulBlogPostBodyTextNode.children.internal.type'
  | 'childrenContentfulBlogPostBodyTextNode.internal.content'
  | 'childrenContentfulBlogPostBodyTextNode.internal.contentDigest'
  | 'childrenContentfulBlogPostBodyTextNode.internal.description'
  | 'childrenContentfulBlogPostBodyTextNode.internal.fieldOwners'
  | 'childrenContentfulBlogPostBodyTextNode.internal.ignoreType'
  | 'childrenContentfulBlogPostBodyTextNode.internal.mediaType'
  | 'childrenContentfulBlogPostBodyTextNode.internal.owner'
  | 'childrenContentfulBlogPostBodyTextNode.internal.type'
  | 'childrenContentfulBlogPostBodyTextNode.body'
  | 'childrenContentfulBlogPostBodyTextNode.sys.type'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulBlogPostBodyTextNode.id'
  | 'childContentfulBlogPostBodyTextNode.parent.id'
  | 'childContentfulBlogPostBodyTextNode.parent.parent.id'
  | 'childContentfulBlogPostBodyTextNode.parent.parent.children'
  | 'childContentfulBlogPostBodyTextNode.parent.children'
  | 'childContentfulBlogPostBodyTextNode.parent.children.id'
  | 'childContentfulBlogPostBodyTextNode.parent.children.children'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.content'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.contentDigest'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.description'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.fieldOwners'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.ignoreType'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.mediaType'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.owner'
  | 'childContentfulBlogPostBodyTextNode.parent.internal.type'
  | 'childContentfulBlogPostBodyTextNode.children'
  | 'childContentfulBlogPostBodyTextNode.children.id'
  | 'childContentfulBlogPostBodyTextNode.children.parent.id'
  | 'childContentfulBlogPostBodyTextNode.children.parent.children'
  | 'childContentfulBlogPostBodyTextNode.children.children'
  | 'childContentfulBlogPostBodyTextNode.children.children.id'
  | 'childContentfulBlogPostBodyTextNode.children.children.children'
  | 'childContentfulBlogPostBodyTextNode.children.internal.content'
  | 'childContentfulBlogPostBodyTextNode.children.internal.contentDigest'
  | 'childContentfulBlogPostBodyTextNode.children.internal.description'
  | 'childContentfulBlogPostBodyTextNode.children.internal.fieldOwners'
  | 'childContentfulBlogPostBodyTextNode.children.internal.ignoreType'
  | 'childContentfulBlogPostBodyTextNode.children.internal.mediaType'
  | 'childContentfulBlogPostBodyTextNode.children.internal.owner'
  | 'childContentfulBlogPostBodyTextNode.children.internal.type'
  | 'childContentfulBlogPostBodyTextNode.internal.content'
  | 'childContentfulBlogPostBodyTextNode.internal.contentDigest'
  | 'childContentfulBlogPostBodyTextNode.internal.description'
  | 'childContentfulBlogPostBodyTextNode.internal.fieldOwners'
  | 'childContentfulBlogPostBodyTextNode.internal.ignoreType'
  | 'childContentfulBlogPostBodyTextNode.internal.mediaType'
  | 'childContentfulBlogPostBodyTextNode.internal.owner'
  | 'childContentfulBlogPostBodyTextNode.internal.type'
  | 'childContentfulBlogPostBodyTextNode.body'
  | 'childContentfulBlogPostBodyTextNode.sys.type'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulBlogPostBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children.id'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.children.children'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulBlogPostBodyTextNode.childMarkdownRemark.internal.type'
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

type ContentfulBlogPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulBlogPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulBlogPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulBlogPostGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulBlogPostGroupConnection_distinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostGroupConnection_maxArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostGroupConnection_minArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostGroupConnection_sumArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


type ContentfulBlogPostGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

type ContentfulBlogPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulBlogPostFieldsEnum>>>;
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
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
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
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAuthorSysFilterInput>;
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
  | 'description'
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
  readonly publishDate: Maybe<DateQueryOperatorInput>;
  readonly body: Maybe<contentfulMyPostBodyTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulMyPostSysFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
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

type contentfulPersonShortBioTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPersonShortBioTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPersonShortBioTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPersonShortBioTextNodeGroupConnection>;
};


type contentfulPersonShortBioTextNodeConnection_distinctArgs = {
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};


type contentfulPersonShortBioTextNodeConnection_maxArgs = {
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};


type contentfulPersonShortBioTextNodeConnection_minArgs = {
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};


type contentfulPersonShortBioTextNodeConnection_sumArgs = {
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};


type contentfulPersonShortBioTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};

type contentfulPersonShortBioTextNodeEdge = {
  readonly next: Maybe<contentfulPersonShortBioTextNode>;
  readonly node: contentfulPersonShortBioTextNode;
  readonly previous: Maybe<contentfulPersonShortBioTextNode>;
};

type contentfulPersonShortBioTextNodeFieldsEnum =
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
  | 'shortBio'
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

type contentfulPersonShortBioTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPersonShortBioTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPersonShortBioTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPersonShortBioTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulPersonShortBioTextNodeGroupConnection_distinctArgs = {
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};


type contentfulPersonShortBioTextNodeGroupConnection_maxArgs = {
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};


type contentfulPersonShortBioTextNodeGroupConnection_minArgs = {
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};


type contentfulPersonShortBioTextNodeGroupConnection_sumArgs = {
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};


type contentfulPersonShortBioTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPersonShortBioTextNodeFieldsEnum;
};

type contentfulPersonShortBioTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulPersonShortBioTextNodeFieldsEnum>>>;
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

type contentfulBlogPostDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulBlogPostDescriptionTextNodeGroupConnection>;
};


type contentfulBlogPostDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeConnection_maxArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeConnection_minArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeConnection_sumArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};

type contentfulBlogPostDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulBlogPostDescriptionTextNode>;
  readonly node: contentfulBlogPostDescriptionTextNode;
  readonly previous: Maybe<contentfulBlogPostDescriptionTextNode>;
};

type contentfulBlogPostDescriptionTextNodeFieldsEnum =
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

type contentfulBlogPostDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulBlogPostDescriptionTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulBlogPostDescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeGroupConnection_maxArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeGroupConnection_minArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeGroupConnection_sumArgs = {
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulBlogPostDescriptionTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulBlogPostDescriptionTextNodeFieldsEnum;
};

type contentfulBlogPostDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulBlogPostDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulBlogPostBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulBlogPostBodyTextNodeGroupConnection>;
};


type contentfulBlogPostBodyTextNodeConnection_distinctArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeConnection_maxArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeConnection_minArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeConnection_sumArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};

type contentfulBlogPostBodyTextNodeEdge = {
  readonly next: Maybe<contentfulBlogPostBodyTextNode>;
  readonly node: contentfulBlogPostBodyTextNode;
  readonly previous: Maybe<contentfulBlogPostBodyTextNode>;
};

type contentfulBlogPostBodyTextNodeFieldsEnum =
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

type contentfulBlogPostBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulBlogPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulBlogPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulBlogPostBodyTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulBlogPostBodyTextNodeGroupConnection_distinctArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeGroupConnection_maxArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeGroupConnection_minArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeGroupConnection_sumArgs = {
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};


type contentfulBlogPostBodyTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulBlogPostBodyTextNodeFieldsEnum;
};

type contentfulBlogPostBodyTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulBlogPostBodyTextNodeFieldsEnum>>>;
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

type MyPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  previousPostSlug: Maybe<Scalars['String']>;
  nextPostSlug: Maybe<Scalars['String']>;
}>;


type MyPostBySlugQuery = { readonly contentfulMyPost: Maybe<(
    Pick<ContentfulMyPost, 'slug' | 'title' | 'publishDate'>
    & { rawDate: ContentfulMyPost['publishDate'] }
    & { readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
  )>, readonly previous: Maybe<Pick<ContentfulMyPost, 'slug' | 'title'>>, readonly next: Maybe<Pick<ContentfulMyPost, 'slug' | 'title'>> };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type PostsFromTopQueryVariables = Exact<{ [key: string]: never; }>;


type PostsFromTopQuery = { readonly allContentfulMyPost: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulMyPost, 'title' | 'slug'>
      & { readonly body: Maybe<(
        Pick<contentfulMyPostBodyTextNode, 'body'>
        & { readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }
      )> }
    )> } };

type FindAuthorQueryVariables = Exact<{ [key: string]: never; }>;


type FindAuthorQuery = { readonly contentfulAuthor: Maybe<(
    Pick<ContentfulAuthor, 'github' | 'nickName' | 'qiita' | 'twitter' | 'updatedAt' | 'id'>
    & { readonly avatarImage: Maybe<(
      Pick<ContentfulAsset, 'title'>
      & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url' | 'contentType'>> }
    )>, readonly description: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
  )> };

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

}