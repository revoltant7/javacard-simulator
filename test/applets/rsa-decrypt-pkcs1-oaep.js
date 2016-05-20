module.exports = {
	name: 'RSA Decrypt PKCS1_OAEP',
	sendComponents: [[0x80, 0xB0, 0x00, 0x00, 0x00, 0x7F], [0x80, 0xB2, 0x01, 0x00, 0x00, 0x7F], [0x80, 0xB4, 0x01, 0x00, 0x1C, 0x01, 0x00, 0x19, 0xDE, 0xCA, 0xFF, 0xED, 0x02, 0x02, 0x04, 0x00, 0x01, 0x05, 0xF2, 0x34, 0x12, 0x34, 0x55, 0x09, 0x72, 0x73, 0x61, 0x61, 0x70, 0x70, 0x6C, 0x65, 0x74, 0x7F], [0x80, 0xBC, 0x01, 0x00, 0x00, 0x7F], [0x80, 0xB2, 0x02, 0x00, 0x00, 0x7F], [0x80, 0xB4, 0x02, 0x00, 0x20, 0x02, 0x00, 0x21, 0x00, 0x19, 0x00, 0x21, 0x00, 0x0A, 0x00, 0x1F, 0x00, 0x52, 0x00, 0x0E, 0x01, 0x31, 0x00, 0x0A, 0x00, 0x2B, 0x00, 0x00, 0x00, 0xAD, 0x03, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7F], [0x80, 0xB4, 0x02, 0x00, 0x04, 0x00, 0x03, 0x01, 0x00, 0x7F], [0x80, 0xBC, 0x02, 0x00, 0x00, 0x7F], [0x80, 0xB2, 0x04, 0x00, 0x00, 0x7F], [0x80, 0xB4, 0x04, 0x00, 0x20, 0x04, 0x00, 0x1F, 0x03, 0x02, 0x01, 0x07, 0xA0, 0x00, 0x00, 0x00, 0x62, 0x01, 0x01, 0x02, 0x01, 0x07, 0xA0, 0x00, 0x00, 0x00, 0x62, 0x01, 0x02, 0x02, 0x01, 0x07, 0xA0, 0x00, 0x00, 0x00, 0x62, 0x7F], [0x80, 0xB4, 0x04, 0x00, 0x02, 0x02, 0x01, 0x7F], [0x80, 0xBC, 0x04, 0x00, 0x00, 0x7F], [0x80, 0xB2, 0x03, 0x00, 0x00, 0x7F], [0x80, 0xB4, 0x03, 0x00, 0x0D, 0x03, 0x00, 0x0A, 0x01, 0x06, 0xF2, 0x34, 0x12, 0x34, 0x55, 0x00, 0x00, 0x21, 0x7F], [0x80, 0xBC, 0x03, 0x00, 0x00, 0x7F], [0x80, 0xB2, 0x06, 0x00, 0x00, 0x7F], [0x80, 0xB4, 0x06, 0x00, 0x11, 0x06, 0x00, 0x0E, 0x00, 0x00, 0x00, 0x80, 0x03, 0x02, 0x00, 0x02, 0x07, 0x01, 0x00, 0x00, 0x00, 0x35, 0x7F], [0x80, 0xBC, 0x06, 0x00, 0x00, 0x7F], [0x80, 0xB2, 0x07, 0x00, 0x00, 0x7F], [0x80, 0xB4, 0x07, 0x00, 0x20, 0x07, 0x01, 0x31, 0x00, 0x04, 0x10, 0x18, 0x8C, 0x00, 0x03, 0x18, 0x10, 0x06, 0x11, 0x02, 0x00, 0x03, 0x8D, 0x00, 0x05, 0x94, 0x00, 0x00, 0x02, 0x87, 0x00, 0x18, 0x10, 0x0F, 0x03, 0x8D, 0x00, 0x7F], [0x80, 0xB4, 0x07, 0x00, 0x20, 0x04, 0x87, 0x01, 0x7A, 0x05, 0x30, 0x8F, 0x00, 0x06, 0x3D, 0x8C, 0x00, 0x07, 0x18, 0x1D, 0x04, 0x41, 0x18, 0x1D, 0x25, 0x8B, 0x00, 0x08, 0x7A, 0x02, 0x21, 0x18, 0x8B, 0x00, 0x09, 0x60, 0x03, 0x7F], [0x80, 0xB4, 0x07, 0x00, 0x20, 0x7A, 0x19, 0x8B, 0x00, 0x0A, 0x2D, 0x1A, 0x04, 0x25, 0x75, 0x00, 0x21, 0x00, 0x03, 0x00, 0x00, 0x00, 0x11, 0x00, 0x22, 0x00, 0x13, 0x00, 0x30, 0x00, 0x1A, 0x70, 0x16, 0x18, 0x19, 0x8C, 0x00, 0x7F], [0x80, 0xB4, 0x07, 0x00, 0x20, 0x0B, 0x70, 0x0F, 0x18, 0x19, 0x8C, 0x00, 0x0C, 0x70, 0x08, 0x11, 0x6D, 0x00, 0x8D, 0x00, 0x0D, 0x7A, 0x04, 0x23, 0x19, 0x8B, 0x00, 0x0A, 0x2D, 0x19, 0x8B, 0x00, 0x0E, 0x3B, 0x1A, 0x05, 0x25, 0x7F], [0x80, 0xB4, 0x07, 0x00, 0x20, 0x32, 0x1A, 0x07, 0x25, 0x11, 0x00, 0xFF, 0x53, 0x29, 0x04, 0x1F, 0x73, 0x00, 0x52, 0x00, 0x00, 0x00, 0x04, 0x00, 0x11, 0x00, 0x1E, 0x00, 0x2B, 0x00, 0x38, 0x00, 0x45, 0xAD, 0x00, 0x1A, 0x08, 0x7F], [0x80, 0xB4, 0x07, 0x00, 0x20, 0x16, 0x04, 0x8E, 0x04, 0x00, 0x02, 0x0B, 0x70, 0x3C, 0xAD, 0x00, 0x1A, 0x08, 0x16, 0x04, 0x8E, 0x04, 0x00, 0x02, 0x0D, 0x70, 0x2F, 0xAD, 0x00, 0x1A, 0x08, 0x16, 0x04, 0x8E, 0x04, 0x00, 0x02, 0x7F], [0x80, 0xB4, 0x07, 0x00, 0x20, 0x09, 0x70, 0x22, 0xAD, 0x00, 0x1A, 0x08, 0x16, 0x04, 0x8E, 0x04, 0x00, 0x02, 0x0A, 0x70, 0x15, 0xAD, 0x00, 0x1A, 0x08, 0x16, 0x04, 0x8E, 0x04, 0x00, 0x02, 0x0C, 0x70, 0x08, 0x11, 0x6B, 0x00, 0x7F], [0x80, 0xB4, 0x07, 0x00, 0x20, 0x8D, 0x00, 0x0D, 0x7A, 0x06, 0x23, 0x19, 0x8B, 0x00, 0x0A, 0x2D, 0x19, 0x8B, 0x00, 0x0E, 0x3B, 0x1A, 0x07, 0x25, 0x11, 0x00, 0xFF, 0x53, 0x32, 0x1F, 0x10, 0x40, 0x6A, 0x08, 0x11, 0x67, 0x00, 0x7F], [0x80, 0xB4, 0x07, 0x00, 0x20, 0x8D, 0x00, 0x0D, 0xAD, 0x01, 0xAD, 0x00, 0x04, 0x8B, 0x00, 0x0F, 0xAD, 0x01, 0x1A, 0x08, 0x1F, 0x1A, 0x08, 0x8B, 0x00, 0x10, 0x3B, 0x19, 0x8B, 0x00, 0x11, 0x29, 0x04, 0x16, 0x04, 0x1F, 0x6D, 0x7F], [0x80, 0xB4, 0x07, 0x00, 0x14, 0x08, 0x11, 0x67, 0x00, 0x8D, 0x00, 0x0D, 0x19, 0x1F, 0x8B, 0x00, 0x12, 0x19, 0x1A, 0x08, 0x1F, 0x8B, 0x00, 0x13, 0x7A, 0x7F], [0x80, 0xBC, 0x07, 0x00, 0x00, 0x7F], [0x80, 0xB2, 0x08, 0x00, 0x00, 0x7F], [0x80, 0xB4, 0x08, 0x00, 0x0D, 0x08, 0x00, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7F], [0x80, 0xBC, 0x08, 0x00, 0x00, 0x7F], [0x80, 0xB2, 0x05, 0x00, 0x00, 0x7F], [0x80, 0xB4, 0x05, 0x00, 0x20, 0x05, 0x00, 0x52, 0x00, 0x14, 0x02, 0x00, 0x02, 0x00, 0x02, 0x00, 0x02, 0x01, 0x01, 0x81, 0x07, 0x00, 0x06, 0x80, 0x03, 0x00, 0x06, 0x82, 0x01, 0x00, 0x06, 0x81, 0x0D, 0x00, 0x01, 0x00, 0x02, 0x7F], [0x80, 0xB4, 0x05, 0x00, 0x20, 0x00, 0x06, 0x00, 0x00, 0x01, 0x03, 0x80, 0x03, 0x02, 0x03, 0x80, 0x03, 0x03, 0x03, 0x80, 0x0A, 0x01, 0x06, 0x00, 0x00, 0x6E, 0x06, 0x00, 0x00, 0xE1, 0x06, 0x80, 0x07, 0x01, 0x03, 0x80, 0x0A, 0x7F], [0x80, 0xB4, 0x05, 0x00, 0x15, 0x06, 0x03, 0x82, 0x01, 0x03, 0x03, 0x82, 0x01, 0x01, 0x03, 0x80, 0x0A, 0x07, 0x03, 0x80, 0x0A, 0x09, 0x03, 0x80, 0x0A, 0x05, 0x7F], [0x80, 0xBC, 0x05, 0x00, 0x00, 0x7F], [0x80, 0xB2, 0x09, 0x00, 0x00, 0x7F], [0x80, 0xB4, 0x09, 0x00, 0x20, 0x09, 0x00, 0x2B, 0x00, 0x0A, 0x16, 0x09, 0x7B, 0x0D, 0x0D, 0x0D, 0x0D, 0x33, 0x02, 0x06, 0x00, 0x1D, 0x05, 0x0A, 0x04, 0x09, 0x08, 0x04, 0x0A, 0x07, 0x07, 0x1C, 0x07, 0x08, 0x07, 0x05, 0x2A, 0x7F], [0x80, 0xB4, 0x09, 0x00, 0x0E, 0x0D, 0x0D, 0x0D, 0x0D, 0x09, 0x07, 0x05, 0x14, 0x08, 0x0A, 0x05, 0x0D, 0x05, 0x07, 0x7F], [0x80, 0xBC, 0x09, 0x00, 0x00, 0x7F]],
	writeComponents: [[0x80, 0xBA, 0x00, 0x00, 0x00, 0x7F]],
	createInstance: [[0x80, 0xB8, 0x00, 0x00, 0x09, 0x06, 0xF2, 0x34, 0x12, 0x34, 0x55, 0x00, 0x00, 0x00, 0x7F]],
	selectApplet: [[0x00, 0xA4, 0x04, 0x00, 0x06, 0xF2, 0x34, 0x12, 0x34, 0x55, 0x00, 0x7F]],
	sendP: [[0x80, 0x22, 0x00, 0x00, 0x20, 0xe6, 0x37, 0xa1, 0x0e, 0xcf, 0xe8, 0x9a, 0xa2, 0xb6, 0xde, 0x3b, 0x9f, 0x4d, 0xfa, 0x5d, 0x92, 0xb9, 0x27, 0x91, 0xdb, 0xdd, 0x0d, 0xaa, 0x1c, 0xb7, 0x26, 0x64, 0x67, 0xa5, 0x7d, 0x87, 0xbf, 0x7F]],
	sendQ: [[0x80, 0x22, 0x01, 0x00, 0x20, 0xe0, 0x68, 0xb2, 0x73, 0xb7, 0xe5, 0x28, 0x5f, 0x70, 0xda, 0x56, 0xb9, 0xd8, 0x13, 0x06, 0x24, 0xf3, 0x7c, 0x13, 0xb3, 0x34, 0x8d, 0x0e, 0x6e, 0x47, 0xac, 0x32, 0x8d, 0x71, 0xa0, 0x6c, 0xe1, 0x7F]],
	sendDP1: [[0x80, 0x22, 0x02, 0x00, 0x20, 0x87, 0xe5, 0x42, 0x9f, 0x59, 0xbf, 0x36, 0xb8, 0xe2, 0x35, 0xa1, 0x00, 0x52, 0xa9, 0x7d, 0xdf, 0x04, 0x89, 0x05, 0x22, 0xc2, 0x04, 0x34, 0xec, 0xaa, 0x78, 0x71, 0x40, 0x75, 0x81, 0xfa, 0x45, 0x7F]],
	sendDQ1: [[0x80, 0x22, 0x03, 0x00, 0x20, 0xa5, 0x64, 0xc4, 0xd1, 0x80, 0xe1, 0xc6, 0x85, 0xc1, 0x39, 0x4a, 0xde, 0x22, 0x20, 0xb3, 0x50, 0x9c, 0x9c, 0x00, 0x30, 0xfe, 0x34, 0x50, 0x44, 0x7b, 0x52, 0xb0, 0xd7, 0x8a, 0xbd, 0x80, 0x41, 0x7F]],
	sendPQ: [[0x80, 0x22, 0x04, 0x00, 0x20, 0x54, 0xa9, 0x9e, 0x39, 0x44, 0xc0, 0x48, 0xa9, 0x97, 0x3f, 0xf8, 0x5c, 0x21, 0xea, 0xa7, 0xcc, 0x37, 0xdc, 0x03, 0xce, 0xd4, 0xa0, 0x4a, 0xb4, 0xd9, 0x10, 0xf8, 0xcf, 0x8a, 0x9a, 0x7a, 0x8d, 0x7F]],
	sendEncrypted: [[0x80, 0x30, 0x00, 0x00, 0x40, 0x15, 0xf2, 0x00, 0xca, 0x94, 0xe6, 0x44, 0x6f, 0x29, 0xca, 0xa8, 0x34, 0x25, 0xc3, 0xcf, 0xda, 0x4b, 0x8c, 0xe6, 0x93, 0x31, 0x0e, 0x07, 0x30, 0x18, 0xf0, 0x72, 0x8a, 0x90, 0xfb, 0x77, 0x97, 0xc5, 0x4c, 0x17, 0xa4, 0xbb, 0x3d, 0xed, 0x1a, 0x39, 0x07, 0xac, 0xc0, 0x58, 0x22, 0x2d, 0x17, 0x99, 0x83, 0x0f, 0x88, 0x2d, 0x9f, 0x08, 0x11, 0xce, 0xc7, 0x83, 0x89, 0xcb, 0xfe, 0x6a, 0xe3, 0x7f]],
	encryptedResponse: '0x48 0x65 0x6c 0x6c 0x6f 0x20 0x57 0x6f 0x72 0x6c 0x64 0x21 0x25 0xc3 0xcf 0xda 0x4b 0x8c 0xe6 0x93 0x31 0x0e 0x07 0x30 0x18 0xf0 0x72 0x8a 0x90 0xfb 0x77 0x97 0xc5 0x4c 0x17 0xa4 0xbb 0x3d 0xed 0x1a 0x39 0x07 0xac 0xc0 0x58 0x22 0x2d 0x17 0x99 0x83 0x0f 0x88 0x2d 0x9f 0x08 0x11 0xce 0xc7 0x83 0x89 0xcb 0xfe 0x6a 0xe3 0x9000'
};
