#!/bin/sh

OLD_EMAIL="princecoder000@gmail.com"
NEW_EMAIL="133494886+cryptostar7@users.noreply.github.com"
NEW_NAME="cryptostar7"

git filter-branch --env-filter '
OLD_EMAIL="'"$OLD_EMAIL"'"
CORRECT_EMAIL="'"$NEW_EMAIL"'"
CORRECT_NAME="'"$NEW_NAME"'"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
fi

if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
fi
' --tag-name-filter cat -- --branches --tags