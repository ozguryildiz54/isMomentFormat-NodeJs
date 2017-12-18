/**
 * Girilen değerin moment zaman formatına uygun olup olmadığını kontrol eder.
 */
exports.isMomentFormat = function(value) {
  var sonuc;
  if (value.length == 10) {
    var tarihKontrol = moment(value, 'YYYY-MM-DD');
    sonuc = tarihKontrol.isValid();
  } else {
    sonuc = false;
  }

  return sonuc;
}