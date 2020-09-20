module.exports = {
    disallowAttributeConcatenation: true,
    disallowAttributeInterpolation: true,
    disallowAttributeTemplateString: null,
    disallowBlockExpansion: true,
    disallowClassAttributeWithStaticValue: true,
    disallowClassLiteralsBeforeAttributes: true,
    disallowClassLiteralsBeforeIdLiterals: true,
    disallowClassLiterals: null,
    disallowDuplicateAttributes: true,
    disallowHtmlText: true,
    disallowIdAttributeWithStaticValue: true,
    disallowIdLiteralsBeforeAttributes: null,
    disallowIdLiterals: null,
    disallowLegacyMixinCall: true,
    disallowMultipleLineBreaks: true,
    disallowSpaceAfterCodeOperator: null,
    disallowSpacesInsideAttributeBrackets: true,
    disallowSpecificAttributes: [
        {
            'link': ['rev', 'charset', 'target'],
            'a': ['rev', 'charset', 'shape', 'coords', 'name'],
            'iframe': ['longdesc', 'align', 'frameborder', 'marginheight', 'marginwidth', 'scrolling'],
            'area': ['nohref'],
            'head': ['profile'],
            'html': ['version'],
            'img': ['name', 'align', 'hspace', 'vspace', 'border'],
            'meta': ['scheme'],
            'object': ['archive', 'classid', 'codebase', 'codetype', 'declare', 'standby', 'align', 'border', 'hspace', 'vspace'],
            'param': ['valuetype', 'type'],
            'table': ['summary', 'align', 'bgcolor', 'cellpadding', 'cellspacing', 'frame', 'rules', 'width'],
            'form': ['accept'],
            'input': ['usemap', 'align'],
            'caption': ['align'],
            'legend': ['align'],
            'hr': ['align', 'noshade', 'size', 'width'],
            'div': ['align'],
            'h1': ['align'],
            'h2': ['align'],
            'h3': ['align'],
            'h4': ['align'],
            'h5': ['align'],
            'h6': ['align'],
            'p': ['align'],
            'colgroup': ['align', 'char', 'charoff', 'width', 'valign'],
            'tfoot': ['align', 'char', 'charoff', 'valign'],
            'tr': ['align', 'bgcolor', 'char', 'charoff', 'valign'],
            'body': ['alink', 'link', 'text', 'vlink', 'background', 'bgcolor'],
            'col': ['char', 'charoff', 'align', 'width', 'valign'],
            'tbody': ['char', 'charoff', 'align', 'valign'],
            'td': ['char', 'charoff', 'axis', 'abbr', 'scope', 'align', 'bgcolor', 'height', 'nowrap', 'width', 'valign'],
            'th': ['char', 'charoff', 'axis', 'align', 'bgcolor', 'height', 'nowrap', 'width', 'valign'],
            'thead': ['char', 'charoff', 'align', 'valign'],
            'br': ['clear'],
            'dl': ['compact'],
            'ol': ['compact'],
            'ul': ['compact', 'type'],
            'li': ['type'],
            'pre': ['width'],
            'script': ['language'],
        },
    ],
    disallowSpecificTags: [
        'basefont', 'big', 'center', 'font', 'strike', 'tt', 'frame', 'frameset', 'noframes', 'acronym', 'applet', 'isindex', 'dir'
    ],
    disallowStringConcatenation: true,
    disallowStringInterpolation: null,
    disallowTagInterpolation: null,
    disallowTemplateString: null,
    disallowTrailingSpaces: true,
    maximumLineLength: 80,
    maximumNumberOfLines: 100,
    requireClassLiteralsBeforeAttributes: true,
    requireClassLiteralsBeforeIdLiterals: null,
    requireIdLiteralsBeforeAttributes: true,
    requireLineFeedAtFileEnd: true,
    requireLowerCaseAttributes: true,
    requireLowerCaseTags: true,
    requireSpaceAfterCodeOperator: true,
    requireSpacesInsideAttributeBrackets: null,
    requireSpecificAttributes: [
        {
            img: ['alt'],
            link: ['rel', 'type']
        }
    ],
    requireStrictEqualityOperators: true,
    validateAttributeQuoteMarks: true,

    validateAttributeSeparator: {
        separator: ' ',
        multiLineSeparator: '\n '
    },
    validateDivTags: true,
    validateExtensions: null,
    validateIndentation: 4,
    validateLineBreaks: 'LF',
    validateSelfClosingTags: true,
    validateTemplateString: true,
}
