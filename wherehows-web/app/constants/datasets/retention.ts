import { IDatasetRetention } from 'wherehows-web/typings/api/datasets/retention';
import { decodeUrn } from 'wherehows-web/utils/validators/urn';

/**
 * 'News' a IDatasetRetention instance with the provided dataset urn
 * @param {string} urn
 * @returns {IDatasetRetention}
 */
const retentionObjectFactory = (urn: string): IDatasetRetention => ({
  datasetUrn: decodeUrn(urn),
  purgeNote: '',
  purgeType: ''
});

export { retentionObjectFactory };
