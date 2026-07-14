set -e
echo "CI/CD Starting Local pipeline..."
echo "[Stage 1/3: BUILD] Installing project packages..."
npm install

echo "[Stage 2/3: BUILD] Running automated test suite..."
npm test
echo "CI tests passed successfully! Code production is ready"
echo "[Stage 3/3: BUILD] Deploying application to local production folder..."
mkdir -p ./dist_production

cp cicd.js ./dist_production/
cp package.json ./dist_production/

echo "[CD] Pipeline successful! App deployed locally to ./dist_production/"