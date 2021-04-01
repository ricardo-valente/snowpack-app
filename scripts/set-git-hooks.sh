if [ ! -f './.husky/_/husky.sh' ]; then
  npx husky install
else
  echo "husky is already innstalled ✅"
fi

if [ ! -f './.husky/pre-commit' ]; then
  npx husky add './.husky/pre-commit' 'npx lint-staged'
else
  echo "pre-commit hook is already settled ✅"
fi

if [ ! -f './.husky/commit-msg' ]; then
  npx husky add '.husky/commit-msg' 'npx --no-install commitlint --edit "$1"'
else
  echo "commit-msg hook is already settled ✅"
fi

if [ ! -f './.husky/prepare-commit-msg' ]; then
  npx husky add './.husky/prepare-commit-msg' 'exec < /dev/tty && git cz --hook || true'
else
  echo "prepare-commit-msg hook is already settled ✅"
fi

