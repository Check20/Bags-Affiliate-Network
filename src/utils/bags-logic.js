function generateAffiliateLink(wallet) {
    const baseUrl = "https://bags.fm/$";
    const affiliateCode = wallet.substring(0, 8).toLowerCase();
    return {
        code: affiliateCode,
        fullLink: `${baseUrl}${affiliateCode}`
    };
}
module.exports = { generateAffiliateLink };
