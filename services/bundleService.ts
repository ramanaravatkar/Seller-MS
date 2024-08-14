import Bundle from '../models/bundle';

export const createBundle = async (bundleData: any) => {
  const bundle = new Bundle(bundleData);
  await bundle.save();
  return bundle;
};

export const updateBundle = async (bundleId: string, updateData: any) => {
  return Bundle.findByIdAndUpdate(bundleId, updateData, { new: true });
};

export const deleteBundle = async (bundleId: string) => {
  return Bundle.findByIdAndDelete(bundleId);
};
